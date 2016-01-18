(function (global) {
    "use strict"

    var scope_id = 0

    var _ = require('lodash')
    var instantiator = require('instantiator')
    var conv = instantiator.conv;

    var regex_interpolate = /\{\{[^\}]+\}\}/g;

    var split = require('css-split');

    var UMG = {
        app: function (template, root_scope) {
            root_scope.$id = scope_id++
            var model = {};
            root_scope(model);
            var page = null;
            model.$apply = function () {
                if (page) {
                    page.update()
                    page.sync()
                }
            }
            page = instantiator(template, model)
            return page
        },
        text: function (opts, text) {
            var out = {}
            if (text) {
                var arr = []
                var last = 0
                function push(t) {
                    arr.push('"' + t.replace('"', '\"') + '"')
                }
                text.replace(regex_interpolate, function (match, pos) {
                    push(text.substr(last, pos - last))
                    arr.push('"" + (' + match.substr(2, match.length - 4) + ')')
                    last = pos + match.length
                });
                if (arr.length) {
                    push(text.substr(last));
                    text = arr.join('+');
                    out['binding.text'] = text;
                } else {
                    out.text = text;
                }
            }
            return this.generic(TextBlock, _.extend(out, opts))
        },
        preview: function (opts) {
            return UMG.base(Viewport, opts, {
                $link: function (elem, scope, attrs) {
                    var setup = instantiator.interpolate('handler', attrs.Setup);
                    process.nextTick(function () {
                        function ChildScope() {
                        }
                        ChildScope.prototype = scope
                        var child = new ChildScope()
                        child.$viewport = elem
                        setup && setup.call(child)
                        scope.$apply()
                    })
                }
            })
        },
        div: function (opts, array) {
            return UMG.generic2(VerticalBox, opts, Array.prototype.slice.call(arguments, 1))
        },
        span: function (opts, array) {
            return UMG.generic2(HorizontalBox, opts, Array.prototype.slice.call(arguments, 1))
        },
        img: function (opts, array) {
            return UMG.generic2(UImage, opts, Array.prototype.slice.call(arguments, 1))
        },
        base: function (type, opts, other) {
            var attrs = conv(opts)
            var s = _.isString(type) ? split(type) : {}

            // grab slot from attrs, and remove it!
            var slot = attrs.Slot
            delete attrs.Slot

            var id = attrs.Id
            delete attrs.Id

            var klass = attrs.Class
            if (klass) {
                if (_.isString(klass)) {
                    klass = klass.split(' ')
                }
            }
            delete attrs.Class

            if (s.type) type = s.type;
            if (s.class) klass = s.class;
            if (s.id) attrs.Id = s.id;

            return _.extend({
                type: type,
                id: id,
                'class': klass,
                attrs: attrs,
                slot: slot,
                $link: opts.$link
            }, other || {});
        },
        generic2: function (type, opts, children) {
            return UMG.base(type, opts, {
                children: (children || []).map(function (c) {
                    return _.isString(c) ? UMG.text({}, c) : c;
                })
            })
        },
        generic: function (type, opts, template) {
            return UMG.generic2(type, opts, Array.prototype.slice.call(arguments, 2))
        },
        base_controller: function (type, opts, template) {
            return UMG.base(type, opts, {
                $link: function (elem, scope, attrs) {
                    var fn = instantiator.interpolate('controller', attrs.Controller);
                    function ChildScopeClass() { }
                    ChildScopeClass.prototype = scope
                    var child_scope = new ChildScopeClass()
                    child_scope.$id = scope_id++
                    child_scope.$apply = function () {
                        elem.update()
                        elem.sync()
                    }
                    var controller = fn.call(scope)
                    controller(child_scope)
                    elem.add_child(template, child_scope)
                }
            })
        },
        controller: function (opts, template) {
            return UMG.base_controller(SizeBox, opts, template)
        },
        controller_div: function (opts, template) {
            return UMG.base_controller(VerticalBox, opts, template)
        },
        controller_cp: function (opts, template) {
            return UMG.base_controller(CanvasPanel, opts, template)
        },
        base_view: function (type, opts) {
            return UMG.base(type, _.extend({ Visibility: 'Collapsed' }, opts), {
                $link: function (elem, scope, attrs) {
                    var child = null

                    function set_data(design) {
                        if (design && (child == null || child.$design != design)) {
                            child = elem.add_child(design, scope)
                            child.$design = design
                            elem.SetVisibility('SelfHitTestInvisible')
                        } else if (!design && child) {
                            elem.remove_child(child)
                            elem.SetVisibility('Collapsed')
                            child = null
                        }
                    }

                    var fn = instantiator.interpolate('sw', attrs.Design);
                    set_data(fn.call(scope, true));

                    elem.add_binding(function (instance, scope_instance) {
                        set_data(fn.call(scope_instance));
                    });
                }
            })
        },
        view: function (opts) {
            return UMG.base_view(SizeBox, opts)
        },
        base_sw: function (type, opts, template) {
            if (_.isString(template)) template = UMG.text({}, template)
            return UMG.base(type, _.extend({ Visibility: 'Collapsed' }, opts), {
                $link: function (elem, scope, attrs) {
                    var child = null

                    function set_data(flag) {
                        if (flag && child == null) {
                            child = elem.add_child(template, scope)
                            elem.SetVisibility('SelfHitTestInvisible')
                        } else if (!flag && child) {
                            elem.remove_child(child)
                            elem.SetVisibility('Collapsed')
                            child = null
                        }
                    }

                    var fn = instantiator.interpolate('sw', attrs.If);
                    set_data(fn.call(scope, true));

                    elem.add_binding(function (instance, scope_instance) {
                        set_data(fn.call(scope_instance));
                    });
                }
            })
        },
        sw: function (opts, template) {
            return UMG.base_sw(SizeBox, opts, template)
        },
        sw_cp: function (opts, template) {
            return UMG.base_sw(CanvasPanel, opts, template)
        },
        sw_div: function (opts, template) {
            return UMG.base_sw(VerticalBox, opts, template)
        },
        baselist: function (opts, template, build) {
            return UMG.base(build.type, opts, {
                $link: function (list, scope, attrs) {
                    var elem = list
                    var old_update = list.update.bind(list)
                    var old_sync = list.sync.bind(list)
                    var old_children = list.enumerate_children.bind(list)
                    function filter_out() {
                        old_children(function (row) {
                            if (!JavascriptWidget.HasValidCachedWidget(row) || !row.GetParent()) {
                                list.remove_child(row, true)
                            }
                        })
                    }

                    list.filter_out = filter_out

                    list.enumerate_children = function (fn) {
                        filter_out()
                        old_children(fn);
                    }

                    list.update = function () {
                        filter_out()
                        old_update()
                    }
                    list.sync = function () {
                        filter_out()
                        old_sync()
                    }


                    var repeat = attrs.Repeat || {}
                    var item_key = 'item';
                    let no_direct_op = !build.direct_op
                    build.register(list, scope, attrs, function (obj) {
                        // for scope inheritance
                        function ChildScopeClass() { }
                        ChildScopeClass.prototype = scope

                        var child_scope = new ChildScopeClass()
                        child_scope.$id = scope_id++
                        child_scope[item_key] = obj.json;

                        obj.$scope = child_scope

                        var row = elem.add_child(template, child_scope, no_direct_op);
                        child_scope.$apply = function () {
                            if (child_scope.$guard) {
                                row.update()
                                row.sync()
                            }
                            else {
                                child_scope.$guard = true
                                scope.$apply()
                                child_scope.$guard = false
                                row.update()
                                row.sync()
                            }
                        }
                        return row;
                    })

                    var last_items = []
                    function alloc(k) {
                        return new JavascriptObject()
                    }
                    function set_data(json, skip) {
                        var items = []
                        if (_.isArray(json)) {
                            json.forEach(function (v, k) {
                                if (v.key != undefined) {
                                    k = v.key
                                }
                                var old = _.find(last_items, function (x) {
                                    return x.json.key === k
                                })
                                var obj = old || alloc(k)
                                obj.json = v
                                items.push(obj)
                            })
                        }

                        last_items = items
                        list.Items = _.sortBy(items, 'json.key')
                        if (!skip && JavascriptWidget.HasValidCachedWidget(list)) list.RequestListRefresh()
                    }

                    var arr = repeat.split(' in ');
                    if (arr.length != 2) {
                        throw "repeat requires x in y";
                    }
                    item_key = arr[0];
                    var fn = instantiator.interpolate('generator', arr[1]);
                    set_data(fn.call(scope, true));
                    if (build.direct_op) {
                        process.nextTick(() => list.RequestListRefresh())
                    }

                    list.add_binding(function (instance, scope_instance) {
                        set_data(fn.call(scope_instance));
                    });
                }
            })
        },
        baselist_raw: function (type, opts, template) {
            if (_.isString(template)) template = UMG.text({}, template)
            return this.baselist(opts, template, {
                type: type,
                direct_op: true,
                register: function (elem, scope, attrs, obj) {
                    let prev = []
                    let bwd = new Map()
                    elem.RequestListRefresh = function () {
                        let cur = elem.Items
                        let added = _.without(cur, ...prev)
                        let removed = _.without(prev, ...cur)
                        added.forEach((item) => {
                            bwd.set(item, obj(item))
                        })
                        removed.forEach((item) => {
                            bwd.get(item).RemoveFromParent()
                            bwd.delete(item)
                        })
                        prev = cur
                    }
                }
            })
        },
        list_div: function (opts, template) {
            return this.baselist_raw(VerticalBox, opts, template)
        },
        list_span: function (opts, template) {
            return this.baselist_raw(HorizontalBox, opts, template)
        },
        list_wrap: function (opts, template) {
            return this.baselist_raw(WrapBox, opts, template)
        },
        list: function (opts, template) {
            if (_.isString(template)) template = UMG.text({}, template)
            return this.baselist(opts, template, {
                type: JavascriptListView,
                register: function (elem, scope, attrs, obj) {
                    elem.JavascriptContext = Context

                    var onClick = instantiator.interpolate('handler', attrs.OnClick);
                    var onDoubleClick = instantiator.interpolate('handler', attrs.OnDoubleClick);

                    elem.proxy = {
                        OnClick: function (json) {
                            onClick && onClick.call(json.$scope)
                            json.$scope.$apply()
                        },
                        OnDoubleClick: function (json) {
                            onDoubleClick && onDoubleClick.call(json.$scope)
                            json.$scope.$apply()
                        },
                        OnSelectionChanged: function (json, mode) {
                            //console.log('changed', json, mode)
                        }
                    }
                    elem.OnGenerateRowEvent.Add(obj)
                }
            })
        },
        tile: function (opts, template) {
            if (_.isString(template)) template = UMG.text({}, template)
            return this.baselist(opts, template, {
                type: JavascriptTileView,
                register: function (elem, scope, attrs, obj) {
                    elem.JavascriptContext = Context

                    var onClick = instantiator.interpolate('handler', attrs.OnClick);
                    var onDoubleClick = instantiator.interpolate('handler', attrs.OnDoubleClick);

                    elem.proxy = {
                        OnClick: function (json) {
                            onClick && onClick.call(json.$scope)
                            json.$scope.$apply()
                        },
                        OnDoubleClick: function (json) {
                            onDoubleClick && onDoubleClick.call(json.$scope)
                            json.$scope.$apply()
                        },
                        OnSelectionChanged: function (json, mode) {
                            //console.log('changed', json, mode)
                        }
                    }

                    elem.OnGenerateTileEvent.Add(obj)
                }
            })
        },
        PropertyEditor: function (opts) {
            return UMG.base(PropertyEditor, opts, {
                $link: function (edit, scope, attrs) {
                    function set_data(x) {
                        edit.SetObject(x)
                    }
                    var fn = instantiator.interpolate('generator', attrs.Target);
                    set_data(fn.call(scope, true));

                    edit.add_binding(function (instance, scope_instance) {
                        set_data(fn.call(scope_instance));
                    });
                    edit.OnChange.Add(function (param) {
                        if (update != null) {
                            update()
                        }
                    })
                }
            })
        }
    }

    function Style(id, attrs) {
        var s = split(id)
        var doc = {
            class: s.class,
            type: s.type,
            attrs: _.clone(conv(attrs)) || { id: s.id },
            children: Array.prototype.slice.call(arguments, 2)
        };


        return doc
    }

    var maker = require('editor-maker')

    UMG.TabManager = function (opts, children) {
        if (!_.isArray(children)) {
            children = Array.prototype.slice.call(arguments, 1);
        }
        return UMG.base(JavascriptEditorTabManager, opts, {
            $link: function (manager, scope) {
                var ids = []
                var next_id = 0

                var instances = []
                
                // @HACK : ?�건 style???�로 ?�긴 control???�???�용?��? ?�는 문제 ?�문??발생?�는 것인??..
                // ?�실 ??control??extended style??갖고 ?�??직접 ?�용??주면 ??�?같습?�다.
                var pending_fn = null

                var Tabs = children.map(function (child) {
                    var id = child.attrs.Id || 'inner' + next_id;
                    next_id++
                    var tab = maker.tab({ TabId: id }, function (context) {
                        var instance = instantiator(child, scope)
                        if (pending_fn) {
                            pending_fn(instance)
                        }
                        instances.push(instance)
                        return instance
                    })
                    ids.push(id);
                    return tab
                })

                function filter_out() {
                    instances = _.filter(instances, function (tab) {
                        return JavascriptWidget.HasValidCachedWidget(tab);
                    });
                }

                var old_children = manager.enumerate_children.bind(manager)
                manager.enumerate_children = function (fn) {
                    old_children(fn);
                    filter_out()
                    console.log('enum! children!', instances.length)
                    pending_fn = fn
                    instances.forEach(function (instance) {
                        fn(instance)
                    });
                }

                var old_update = manager.update.bind(manager)
                var old_sync = manager.sync.bind(manager)

                manager.update = function () {
                    filter_out()
                    old_update()
                    instances.forEach(function (instance) {
                        instance.update();
                    });
                }
                manager.sync = function () {
                    filter_out()
                    instances.forEach(function (instance) {
                        instance.sync();
                    });
                }

                var layout = {
                    Name: "jseditor_layoutv18",
                    PrimaryAreaIndex: 0,
                    Areas: [
                        {
                            Type: 'Area',
                            SizeCoefficient: 1,
                            WindowPlacement: 'Placement_NoWindow',
                            Orientation: 'Orient_Horizontal',
                            nodes: ids.map(function (id) {
                                return {
                                    Type: 'Stack',
                                    SizeCoefficient: 1 / ids.length,
                                    HideTabWell: true,
                                    Tabs: [
                                        { TabId: id, TabState: 'OpenedTab' }
                                    ]
                                }
                            })
                        }
                    ]
                }

                manager.Tabs = Tabs
                manager.Layout = JSON.stringify(layout)
            }
        })
    }

    var NextContextId = 0
    global.CommandCache = global.CommandCache || {}
    UMG.CommandBuilder = function (Id, opts, children) {
        if (!_.isArray(children)) {
            children = Array.prototype.slice.call(arguments, 2)
        }
        var ContextId = "UMGCommandBuilder_" + Id

        return function (elem) {
            if (global.CommandCache[ContextId]) {
                global.CommandCache[ContextId].Discard()
            }
            var obj = {}
            var scope = null
            children.forEach(function (child, key) {
                var id = child.id || key
                obj[id] = _.extend({ scope: function () { return scope } }, child)
            })
            var commands = global.CommandCache[ContextId] = maker.commands({
                name: ContextId,
                commands: obj
            })

            commands.Commit()

            elem.Bind(commands)

            children.forEach(function (child, key) {
                var id = child.id || key
                elem.AddMenuEntry(commands, id)
            })

            return function (_scope) {
                scope = _scope;
            }
        }
    }

    UMG.MenuBar = function (opts, children) {
        children = Array.prototype.slice.call(arguments, 1)
        var menu = {}
        children.forEach(function (child) {
            menu[child.Id] = child
        })
        var postfix = []
        var bound_scope = null
        var opts = {
            OnHook: function (type) {
                if (type == 'Menubar') {
                    for (var id in menu) {
                        var child = menu[id];
                        var displayName = child.DisplayName || '<MENU>';
                        var tooltip = child.Tooltip || '';
                        JavascriptEditorMenu.AddPullDownMenu(id, displayName, tooltip)
                    }
                }
                else {
                    var child = menu[type]
                    if (_.isFunction(child.$link)) {
                        var fn = child.$link(JavascriptUIExtender)
                        if (_.isFunction(fn)) {
                            postfix.push(fn)
                            if (bound_scope) {
                                fn(bound_scope)
                            }
                        }
                    }
                }
                UMG.$$temp = null
            }
        }
        return UMG.base(JavascriptEditorMenu, opts, {
            $link: function (elem, scope, attrs) {
                bound_scope = scope
                postfix.forEach(function (fn) {
                    fn(scope)
                })
            }
        })
    };

    UMG.Menu = function (opts, commands) {
        commands = Array.prototype.slice.call(arguments, 1)
        var args = [opts.Id, {}]
        args = args.concat(commands)
        opts.$link = opts.$link || UMG.CommandBuilder.apply(UMG, args)
        return opts
    }

    UMG.MenuEntry = function (opts) {
        opts = conv(opts)
        var bindings = instantiator.make_fnbinding(opts.Fn || {});
        var _bindings = instantiator.make_binding(opts.Binding || {});
        var holder = null
        var obj = {
            OnExecute: {
                Add: function (fn) {
                    holder.execute = fn
                },
                Clear: function () { }
            },
            OnQuery: {
                Add: function (fn) {
                    holder.query = fn
                },
                Clear: function () { }
            }
        }
        return _.extend({
            Query: function (what) {
                var test = {}
                var answer = undefined
                _bindings(test, this.scope());

                if (what == 'checked') {
                    answer = test.Checked
                } else if (what == 'visible') {
                    answer = test.Visible
                } else if (what == 'enabled') {
                    answer = test.Enabled
                }

                return answer == undefined ? true : answer;
            },
            Execute: function () {
                if (holder == null) {
                    holder = {}
                    bindings(obj, this.scope());
                }
                holder.execute && holder.execute()
            }
        }, opts)
    }
    UMG.MenuButton = function (opts) {
        return UMG.MenuEntry(_.extend({ type: 'Button' }, opts))
    }
    UMG.MenuToggleButton = function (opts) {
        return UMG.MenuEntry(_.extend({ type: 'ToggleButton' }, opts))
    }

    module.exports = _.extend(UMG.generic, UMG);
} (this))
