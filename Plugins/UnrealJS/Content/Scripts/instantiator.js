"use strict";

const _ = require('lodash');
const wrap = require('wrap')

function make_fn(name, str) {
    var source = "function " + name + "() { try { " + str + " } catch (e) { return '' } }; " + name + ";";
    return eval(source);
}

function beautify(k) {
    return k.split('-').map(function (x) {
        return x.charAt(0).toUpperCase() + x.slice(1);
    }).join('');
}

function conv(obj) {
    var out = {};
    for (var k in obj) {
        var v = obj[k];
        var index = k.indexOf('.');
        if (index >= 0) {
            var lhs = k.substr(0, index);
            var rhs = k.substr(index + 1);
            var tmp = {}
            tmp[rhs] = v;
            k = lhs;
            v = tmp;
        }
        k = beautify(k);
        if (_.isObject(v) && !_.isFunction(v) && _.keys(v).length > 0) {
            out[k] = out[k] || {};
            _.extend(out[k], conv(v));
        } else {
            out[k] = v;
        }
    }
    return out;
}

function set_attr(instance, k, attr) {
    function inner(k) {
        var setter = instance["Set" + k]
        if (setter != undefined) {
            setter.call(instance, attr)
            return true
        } else if (instance[k] != undefined) {
            if (instance[k] instanceof UObject) {
                set_attrs(instance[k], attr)
                return true
            } else {
                instance[k] = attr
                return true
            }
        } else {
            return false
        }
    }

    inner(k) || inner("b" + k)
}

function interpolate(k, v) {
    return make_fn(k, wrap(v));
}

function make_binding(attrs) {
    var out = {}
    var funcs = []
    function add(dest, k, fn) {
        funcs.push(function (scope) {
            dest[k] = fn.call(scope);
        })
    }
    function visit(o, dest) {
        for (var k in o) {
            var v = o[k]
            if (_.isString(v)) {
                var fn = interpolate(k, v);
                add(dest, k, fn);
            } else if (_.isObject(v)) {
                out[k] = {}
                visit(o[k], dest[k])
            }
        }
    }

    visit(attrs, out)

    return function (instance, scope) {
        funcs.forEach(function (f) { f(scope) });
        set_attrs(instance, out);
    }
}

function make_fnbinding(attrs) {
    var out = {}
    var funcs = []
    var has_init = false
    function add(dest, k, fn) {
        funcs.push(function (scope) {
            var F = function () {
                var ret = fn.apply(scope, arguments);
                if (!F.no_apply) {
                    scope.$apply();
                }
                return ret;
            };
            dest[k] = F;
        })
    }

    function visit(o, dest) {
        for (var k in o) {
            var v = o[k]
            if (_.isString(v)) {
                var fn = interpolate(k, v);
                add(dest, k, fn);
            }
        }
    }

    visit(attrs, out)

    return function (instance, scope) {
        funcs.forEach(function (f) { f(scope) });
        if (out.Init) {
            if (!has_init) {
                out.no_apply = true
                out.Init()
                out.no_apply = false
                has_init = true
            } else {
                delete out.Init
            }
        }
        set_attrs(instance, out);
    }
}

function set_attrs(instance, attrs, scope) {
    var bindings = []
    for (var k in attrs) {
        if (k == 'Binding') {
            if (_.isObject(scope)) {
                var v = attrs[k];
                var fn = make_binding(v);
                bindings.push(fn);
            } else {
                console.error('Binding requires scope')
            }
        } else if (k == 'Fn') {
            if (_.isObject(scope)) {
                var v = attrs[k];
                var fn = make_fnbinding(v);
                bindings.push(fn);
            } else {
                console.error('Binding requires scope')
            }
        } else {
            bindings.concat(set_attr(instance, k, attrs[k]));
        }
    }
    return bindings;
}

var next_id = 0

let Outer = Root.GetEngine ? Root.GetEngine().GetEditorWorld() : GWorld

let proxied = {}

function expand(children,scope) {
    let dirty = false
    children = _.flatten(_.compact(children.map(child => {
        if (typeof child == 'Array') {
            dirty = true
            return child
        }
        else if (typeof child == 'function') {
            dirty = true
            return child(scope)
        } else {
            return child
        }
    })))
    if (dirty) {
        return expand(children,scope)
    } else {
        return children
    }
}

function proxy(base) {
    if (proxied[base]) return proxied[base]

    class Proxy extends base {
        constructor(design, scope) {
            super(Outer)

            this.design = design
            this.attrs = design.attrs || {}
            this.scope = scope
            this.id = next_id++
            this.class = design.class || []
            this.type = design.type
            this.ids = {}
            this.children = []
            
            this.bindings = set_attrs(this, this.attrs, scope)
            this.custom_bindings = []
            
            this.has_unlink = !!design.$unlink 

            {
                var children = _.compact(design.children) || []

                children = expand(children,scope)

                children.forEach(child => {
                    this.add_child(child, scope)
                })
            }
    
            if (design.$link != undefined) {
                design.$link(this, scope, this.attrs);
            }

            this.update()
        }

        sync() {
            JavascriptWidget.CallSynchronizeProperties(this)
            this.children.forEach(child => {
                child.instance.sync()
                JavascriptWidget.CallSynchronizeProperties(child.slot);
            })
        }

        set_attrs(attrs) {
            set_attrs(this, attrs, this.scope)
        }

        find(id) {
            if (this.design.id == id) return this

            {
                let o = this.ids[id]
                if (o != undefined) return o    
            }
            
            for (var k in this.children) {
                let o = this.children[k].instance.find(id)
                if (o != undefined) return o
            }
        }
        
        add_binding(binding) {
            this.custom_bindings.push(binding)
        }
        
        update() {
            var scope_instance = this.scope
            let kick = fn => {
                fn(this, scope_instance)
            }
            this.bindings.forEach(kick)
            this.custom_bindings.forEach(kick)
            this.children.forEach(function (child) {
                child.instance.update();
                if (child.bindings) {
                    child.bindings.forEach(function (fn) {
                        fn(child.slot, scope_instance)
                    })
                }
            })
        }
        
        enumerate_children(fn) {
            if (_.isArray(this.children)) {
                this.children.forEach(child => {
                    fn(child.instance)
                })
            }
        }
        
        set_slot_attrs(attrs) {
            set_attrs(this.Slot,attrs)
        }
        
        add_child(child, scope, no_directop) {
            var c = instantiate(child, scope)
            if (!c) return
            
            var slot, child_bindings
            if (!no_directop) {
                slot = this.AddChild(c);
                if (slot) {
                    child_bindings = set_attrs(slot, child.slot || {}, scope)
                } else {
                    console.error("No slot to add")
                }
            }

            if (child.id != undefined) {
                this.ids[child.id] = c;
            }

            if (this.cached_extended_styles) {
                c.set_styles(this.cached_extended_styles);
            }
            
            this.has_unlink = this.has_unlink || c.has_unlink

            this.children.push({ 
                instance: c, 
                slot: slot, 
                bindings: child_bindings, 
                template: child 
            })
            
            return c
        }
        
        remove_child(child_instance, no_directop) {
            var child = _.find(this.children, function (child) {
                return child.instance == child_instance;
            });
            if (child) {
                if (child.id != undefined) {
                    delete this.ids[child.id]
                }
                this.children.splice(this.children.indexOf(child), 1)
            } else {
                console.error('couldnot find child', child_instance)
            }
            if (!no_directop) {
                child_instance.destroy()
                child_instance.RemoveFromParent()
            }
        }
        
        replace_childAt(index, child, scope) {
            if (index < 0 || index >= this.Slots.length)
                return false;
            var c = instantiate(child, scope)         
            let slot = this.Slots[index];
            slot.Content = c;
            if (c) {
                c.Slot = slot;
            }
            return true;
        }
        
        replace_child(oldChild, newChild) {
            let index = this.GetChildIndex(oldChild)
            if(index != 1)
                this.replace_childAt(index, newChild)
            return false    
        }
        
        destroy_all_children() {
            this.children.forEach(child => {
                child.instance.destroy()
            })
        }
        
        destroy() {
            if (!this.has_unlink) return
            
            this.design.$unlink && this.design.$unlink()
            this.destroy_all_children()
        } 
        
        set_styles(styles) {
            let design = this.design
            var matched_styles = _.filter(styles, function (style) {
                return (!style.type || style.type == design.type) && (!style.id || style.id == design.id) && (!style.class || _.every(style.class || [], function (k) { return _.includes(design.class || [], k) }));
            }).map(function (style) {
                style = _.clone(style);
                if (style.weight == undefined) {
                    var base = 0;
                    if (style.id) { base = 3; }
                    else if (style.class) { base = 2; }
                    style.weight = base;
                }
                return style;
            });

            var computed = {}
            var has_computed = false
            var extended = _.filter(styles, function (style) {
                return !style.hard
            });

            function deepExtend(out, src) {
                for (var k in src) {
                    var v = src[k]
                    if (out[k] == undefined) {
                        out[k] = v
                    } else {
                        if (_.isObject(v)) {
                            if (out[k]) {
                                deepExtend(out[k], v)
                            }
                        } else {
                            out[k] = v
                        }
                    }
                }
            }

            _.sortBy(matched_styles, 'weight').forEach(function (style) {
                // console.log(style.weight,JSON.stringify(style))
                deepExtend(computed, style.attrs)
                if (style.children) {
                    extended = extended.concat(style.children.map(function (child_style) {
                        child_style = _.clone(child_style)
                        child_style.weight = style.weight + 10
                        return child_style
                    }))
                }
                has_computed = true
            })

            if (has_computed) {
                var slot = computed.Slot;
                this.set_attrs(computed);
                if (slot && this.Slot) {
                    this.set_slot_attrs(slot);
                }
            }

            this.cached_extended_styles = extended

            this.enumerate_children(function (child) {
                child.set_styles(extended);
            })
        }
    }

    proxied[base] = Proxy
    return Proxy
}

function $default_scope() {
    return {}
}

function instantiate(design, scope) {
    if (!design || !design.type) {
        throw 'failed to instantiate no design!'
    }

    scope = scope || $default_scope
    
    let p = (proxy(design.type))
    var instance = new p(design, scope);
    if (!instance) {
        throw 'failed to instantiate' + design.type
    }
    
    return instance;
}

instantiate.interpolate = interpolate;
instantiate.conv = conv;
instantiate.make_fnbinding = make_fnbinding;
instantiate.make_binding = make_binding;

module.exports = instantiate;
