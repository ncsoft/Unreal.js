const React = require('react');
const ReactUMG = require('react-umg');
const _ = require('lodash')
const UMG = require('UMG');
const instantiator = require('instantiator');
const events = require('events')

// builder helper (for better js-ish code)

function make(what) {
    if (what instanceof JavascriptUICommandInfo) {
        return function (builder) {
            builder.AddToolBarButton(what)
        }
    } else if (what instanceof Array) {
        let arr = what.map(make)
        return function (builder) {
            arr.forEach(fn => fn(builder))
        }
    } else if (what.section) {
        let fn = make(what.inner)
        return function (builder) {
            builder.BeginSection(what.section)
            fn(builder)
            builder.EndSection()
        }
    } else if (what.pullDown) {
        let {tooltip, menu} = what
        let fn = make(menu)
        return function (builder) {
            builder.AddPullDownMenu(what.pullDown, tooltip, fn)
        }
    }
}

function MakeCommands() {
    const StyleSetName = 'reactEditor'
    function GenerateStyle() {
        const Icon40x40 = { X: 16, Y: 16 }
        let style = JavascriptUMGLibrary.CreateSlateStyle(StyleSetName)
        style.SetCoreContentRoot(Context.GetDir('EngineContent') + "Editor/Slate");
        style.AddImageBrush("reactEditor.Hello", style.RootToCoreContentDir("Icons/icon_SCC_Sync_16x.png"), Icon40x40, { R: 1, G: 1, B: 1, A: 1 }, 'NoTile', 'FullColor');
        style.AddImageBrush("reactEditor.Save", style.RootToCoreContentDir("Icons/icon_SCC_Submit_16x.png"), Icon40x40, { R: 1, G: 1, B: 1, A: 1 }, 'NoTile', 'FullColor');
        style.Register()
        style.$destroy = _ => style.Unregister()
        return style
    }
    let style = GenerateStyle();

    let context = JavascriptMenuLibrary.NewBindingContext('reactEditor', 'reactEditorMenu', '', StyleSetName);
    let commands = new JavascriptUICommands;

    commands.OnExecuteAction = (what) => {
        let commands = {
            Hello: () => {
                console.log('안녕하세요')
            },
            Save: () => {
                console.log('저장합니다.')
            }
        }
        let cmd = commands[what]
        if (!cmd) {
            throw new Error(what)
        }
        cmd()
    };

    commands.OnCanExecuteAction = (what) => {
        return true;
    };

    commands.BindingContext = context
    commands.Commands = _.map({
        'Hello': {
            params: {
                FriendlyName: '안녕',
                Description: '반갑습니다',
                ActionType: 'Button',
                DefaultChord: {
                    Key: {
                        KeyName: 'A',
                    },
                    bCtrl: true
                }
            }
        },
        "Save": {
            params: {
                FriendlyName: '저장',
                Description: '저장합니다',
                ActionType: 'Button',
                DefaultChord: {
                    Key: {
                        KeyName: 'S',
                    },
                    bCtrl: true
                }
            }
        }
    }, (v, k) => _.extend({ Id: k }, v.params))
    commands.Initialize();
    commands.destroy = () => {
        commands.Uninitialize();
        context.Destroy();
        style.$destroy();
    }

    return commands;
}

function makeTab(id,design) {
    let tabs = global[id] = []
    var tab = new JavascriptEditorTab
    tab.TabId = id
    tab.Role = 'PanelTab'
    tab.DisplayName = id
    tab.OnSpawnTab = _ => {
        let widget = design()
        tabs.push(widget)
        return widget
    } 
    tab.OnCloseTab = t => {
        t.RemoveFromParent()
        tabs.splice(tabs.indexOf(t),1) 
    } 
    tab.destroy = _ => { 
        tabs.forEach(t => tab.CloseTab(t))
        tabs.length = 0
    }
    return tab
}

function layout() {
    return JSON.stringify({
        Type:'Layout',
        Name:'TestLayout',
        PrimaryAreaIndex: 0,
        Areas: [
            {
                Type: 'Area',
                Orientation: 'Orient_Horizontal',
                WindowPlacement: 'Placement_NoWindow',
                Nodes: [
                    {
                        Type: 'Stack',
                        SizeCoefficient : 0.2,
                        HideTabWell: 'true',
                        Tabs: [
                            {                                
                                TabId: 'BrowserTab',
                                TabState: 'OpenedTab'  
                            }
                        ]
                    },
                    {
                        Type: 'Splitter',
                        Orientation: 'Orient_Vertical',
                        SizeCoefficient : 0.8,
                        Nodes : [
                            {
                                Type: 'Stack',
                                SizeCoefficient : 0.6,
                                HideTabWell: 'true',
                                Tabs: [
                                    {                                
                                        TabId: 'ViewportTab',
                                        TabState: 'OpenedTab'  
                                    },
                                    {                                
                                        TabId: 'GraphTab',
                                        TabState: 'OpenedTab'  
                                    },
                                     {                                
                                        TabId: 'GraphSMTab',
                                        TabState: 'OpenedTab'  
                                    }
                                ]
                            },
                            {
                                Type: 'Stack',
                                SizeCoefficient : 0.4,
                                HideTabWell: 'true',
                                Tabs: [
                                    {                                
                                        TabId: 'PropertyTab',
                                        TabState: 'OpenedTab'  
                                    }
                                ]                                
                            }                                           
                        ]
                    }                                        
                ]
            }
        ]
    })    
}


function viewportTab(E) {
    return makeTab('ViewportTab', () => require('./demo-viewport')(E))        
}       


function browserTab(E) {
    return makeTab('BrowserTab',() => require('./demo-browserEd')(E))        
}

function propsTab(E) {
    return makeTab('PropertyTab', () => require('./demo-propsEd')(E))
}

function graphTab(E) {
    return makeTab('GraphTab', () => require('./demo-graph')(E));
}

function graphSMTab(E) {
    return makeTab('GraphSMTab', () => require('./demo-sm')(E));
}

function headerDesign() {
    const SmallFont = {FontObject:Root.GetEngine().SmallFont, Size:12};

    let commands = MakeCommands()
    let commandList = JavascriptMenuLibrary.CreateUICommandList()
    commands.Bind(commandList)

    function onHook() {
        let builder = JavascriptMenuLibrary.CreateToolbarBuilder(commandList, 'Orient_Horizontal', builder => {
            make(commands.CommandInfos)(builder)
            JavascriptMultiBox.Bind(builder)
        })
    } 

    function destroy() {
        commands.destroy();
    }

    let widget = ReactUMG.wrap(
        <div>
            <uJavascriptMultiBox CommandList={commandList} OnHook={onHook}/>
            <div>
                <text Font={SmallFont} Text="UMG Editor"/>
            </div>
        </div>
    );
    widget.proxy = {
        OnDestroy: (bReleaseChildren) => {
            destroy();
        }
    }

    return widget
}



function design() {
    let E = new events.EventEmitter();
    let tabManager = new JavascriptEditorTabManager(JavascriptLibrary.CreatePackage(null,'/Script/Javascript'))
    tabManager.Tabs = [viewportTab(E), propsTab(E), browserTab(E), graphTab(E), graphSMTab(E)]
    tabManager.Layout = layout() 

    // @todo : convert to react-umg
    return instantiator(
        UMG.div({$link: elem => {
            elem.AddChild(headerDesign())
            elem.AddChild(tabManager).Size.SizeRule = 'Fill'  
        }, $unlink:elem => {
            elem.ClearChildren()
        }})
    )
} 

module.exports = function () {
    if (!this["JavascriptEditorLibrary"]) return function () {}
    ReactUMG.spawnTab(design, {Title:"UMG Editor", TabId:"UMGEditor"});

    return () => {}
}