var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const React = require('react');
const ReactUMG = require('react-umg');
const _ = require('lodash');
const ROOT_DIRECTORY = Root.GetDir('GameContent') + '/Data';

module.exports = function broserDesign(E) {
    const SmallFont = { FontObject: Root.GetEngine().SmallFont, Size: 12 };
    let editorStyle = new JavascriptStyleSet();
    editorStyle.StyleSetName = 'EditorStyle';
    let json2u = require('./json2u')();
    let SourceItem_C = require('../lib/source-item')(json2u, E);

    class BrowserDesign extends React.Component {
        constructor(props, context) {
            super(props, context);
            this.items = [];
            this.opened = [];
            this.update = this.update.bind(this);
        }

        componentDidMount() {
            let elem = this.TreeView.ueobj;
            elem.JavascriptContext = Context;
            elem.EntryWidgetClass = WidgetBlueprint.Load('/Game/Blueprints/EntryWidget_C').GeneratedClass;
            elem.proxy = {
                OnSelectionChanged: item => {
                    let extra = elem.GetSelectedItems().OutItems;
                    E.emit('choose', extra.map(t => t.toUObject()));
                }
            };
            this.onSwitch = this.onSwitch.bind(this);
            this.updateData = this.updateData.bind(this);
            E.addListener('updateData', this.updateData);
            E.addListener('switch', this.onSwitch);
            this.enumerate();
        }

        updateData(targets) {
            let arr = targets.map(obj => obj.$source);
            arr.forEach((obj, index) => {
                let data = targets[index];
                let json = JSON.parse(data.toString());
                _.extend(obj.data, json);
                obj.markDirty();
            });
        }

        componentWillUnmount() {
            E.removeListener('switch', this.onSwitch);
        }

        is_open(item) {
            return this.opened.indexOf(item.path) >= 0;
        }

        onSwitch(arr) {
            let elem = this.TreeView.ueobj;
            let prev = arr[0];
            let next = arr[1];
            if (prev == data) {
                data = next;
                elem.SetSelection(null);
                this.pendingSelection = data;
                E.emit('data', [data]);
                console.log('data', data);
            }

            if (prev == null) {
                elem.SetSelection(null);
            }
        }

        enumerate() {
            let elem = this.TreeView.ueobj;
            this.treeRoot = new SourceItem_C();
            this.treeRoot.path = ROOT_DIRECTORY;
            this.treeRoot.expand().then(item => {
                let p = this.treeRoot.children.map(child => child.expand());
                this.treeRoot.setup();
                return Promise.all(p).then(items => {
                    let promises = [];
                    items.forEach(item => item.children.forEach(i => {
                        promises.push(i.expand());
                    }));
                    Promise.all(promises).then(i => {
                        this.update();
                    });
                });
            });
        }

        update() {
            let elem = this.TreeView.ueobj;
            this.items = [this.treeRoot];
            elem.Items = _.clone(this.items);
            elem.RequestTreeRefresh();
            if (this.is_open(this.treeRoot)) {
                elem.SetItemExpansion(this.treeRoot, true);
            }
            if (this.pendingSelection) {
                elem.SetSelection(this.pendingSelection);
                this.pendingSelection = null;
            }
        }

        updateFilter(text) {
            let elem = this.TreeView.ueobj;
            if (elem) {
                elem.Items = _.filter(this.items, item => text == '' || item.path.indexOf(text) >= 0);
                elem.RequestTreeRefresh();
            }
        }

        render() {
            let treeViewStyle = {
                'slot.size.size-rule': 'Fill',
                SelectionMode: 'Multi',
                Columns: [{
                    Id: 'Name',
                    Width: 1.0
                }],
                OnGenerateRowEvent: (item, column, widget) => {
                    let name;
                    if (item) {
                        name = item.path.split('/');
                        name = name[name.length - 1];
                    } else {
                        name = column;
                    }

                    return ReactUMG.wrap(React.createElement(
                        'span',
                        null,
                        item ? React.createElement('img', { Slot: { Padding: { Right: 1, Bottom: 1, Top: 1 } }, BrushDelegate: _ => editorStyle.GetBrush(item.is_json ? 'EditorViewport.WireframeMode' : widget.IsItemExpanded(item) ? 'ContentBrowser.AssetTreeFolderOpen' : 'ContentBrowser.AssetTreeFolderClosed') }) : [],
                        item == widget.Items[0] ? React.createElement('uJavascriptTextBlock', { Font: SmallFont, Text: "데이터" }) : React.createElement('uJavascriptTextBlock', { Font: { FontObject: SmallFont.FontObject, Size: 10 }, SelectAllTextWhenFocused: true, ClearKeyboardFocusOnCommit: true, RevertTextOnEscape: true, Text: name })
                    ));
                },
                OnGetChildren: (item, instance) => {
                    item.expand();
                    instance.Children = _.filter(item.children, item => !item.is_schema);
                    instance.Children.forEach(child => {
                        process.nextTick(_ => {
                            if (this.is_open(child)) {
                                instance.SetItemExpansion(child, true);
                            }
                        });
                    });
                },
                OnExpansionChanged: (item, status) => {
                    if (status) {
                        this.opened.push(item.path);
                        this.opened = _.uniq(this.opened);
                    } else {
                        let len = item.path.length;
                        this.opened = this.opened.filter(x => x.substr(0, len) != item.path);
                    }
                }
                // OnContextMenuOpening: (elem) => {
                //     return ReactUMG.wrap(
                //         <uJavascriptMultiBox CommandList={} OnHook={} />
                //     )
                // }
            };

            return React.createElement(
                'div',
                null,
                React.createElement('uJavascriptSearchBox', { HintText: "...", OnTextChanged: this.updateFilter.bind(this) }),
                React.createElement(
                    'uBorder',
                    { Slot: { Size: { SizeRule: 'Fill' } }, Background: editorStyle.GetBrush('ProjectBrowser.Background') },
                    React.createElement('uJavascriptTreeView', _extends({ ref: ref => this.TreeView = ref }, treeViewStyle))
                )
            );
        }
    }

    let widget = ReactUMG.wrap(React.createElement(BrowserDesign, null));
    global.widget = widget;
    return widget;
};