const tags = ["PCG"]
const StyleSetName = 'UnrealJS'
	
function purge(world) {
    let prev_actors = world.GetAllActorsOfClassAndTags(StaticMeshActor, tags).OutActors  
    prev_actors.forEach((actor) => world.EditorDestroyActor(actor))  
}
    
function generate_spiral(world, opts) {
    const mesh = opts.mesh
    const mtrl = opts.mtrl
    
    let N = opts.N || 10
    let num_spirals = opts.num_spirals || 5
    let radius = opts.radius || 200
    let height = opts.height || 200 * 5
    purge(world)  
    for (let i = 0; i < N; ++i) {
        let v = i / N
        let u = v * num_spirals * 2 * Math.PI
        let t = {
            Translation: {
                X: Math.sin(u) * radius,
                Y: Math.cos(u) * radius,
                Z: v * height
            }
        }
        let color = {
            R: t.Translation.X * 2 + 1,
            G: t.Translation.Y * 2 + 1,
            B: v, 
            A: 1
        } 
        let mi = world.CreateDynamicMaterialInstance(mtrl)
        mi.SetVectorParameterValue('color', color)
        let sma = StaticMeshActor.C(world.BeginSpawningActorFromClass(StaticMeshActor, t, false))
        sma.StaticMeshComponent.SetMobility('Movable')
        sma.StaticMeshComponent.StaticMesh = mesh			
        sma.StaticMeshComponent.SetMaterial(0, mi)
        sma.StaticMeshComponent.ReregisterComponent()
        sma.FinishSpawningActor(t)
        sma.Tags = tags
    }
}

function get_engine() {
    return Root.GetEngine()
}

function get_world() {
    return get_engine().GetEditorWorld()
}

function redraw() {
    get_engine().RedrawAllViewports(true)
}
    
function generate(data) {
    generate_spiral(get_world(), data)
    redraw()
}

function clear() {
    purge(get_world())
    redraw()
}    

function main() {
    let UMG = require('UMG')
	let instantiator = require('instantiator')
	
	let schema = {
		"title": "SpiralMetaData",
		"type": "object",
		"properties": {
            "desc" : {
                "type" : "string"  
            },
            "mesh" : {
                "type" : "StaticMesh",
            },
            "mtrl" : {
                "type" : "Material",
            },
			"N" : {
				"type" : "integer",
			},
			"height" : {
				"type" : "float",
			},
			"num_spirals" : {
				"type" : "integer",
			},
			"radius" : {
				"type" : "float"
			},
            "test" : {
                "type" : "array",
                "items" : {
                    "title": "TestStruct",
                    "type": "object",
                    "struct": "true",
                    "properties": {
                        "A": {
                            "type" : "integer"                            
                        },
                        "B": {
                            "type" : "string"                            
                        }
                    }   
                }                
            }
		},
		"required" : [ "N", "height", "num_spirals", "radius" ]
	}
	
    let json2u = require('./json2u')()	
	let meta = json2u.create('spiral',schema)
    
    let previewWorld
    function gen() {
        let data = new meta()
        data.num_spirals = 10;
        data.radius = Math.random() * 300 + 100; 
        data.N = 100;
        data.height = Math.random() * 800 + 200
        data.mesh = StaticMesh.Load('/Engine/BasicShapes/Sphere')
        data.mtrl = Material.Load('/Game/Color.Color')
        data.desc = Math.random().toString(16)
        return data
    }
    let data = gen()
    
    let GEngine = Root.GetEngine()    
    const buttonTextStyle = {
        Font : {
            FontObject : GEngine.SmallFont,
            Size : 10
        },
        ColorAndOpacity : {
            SpecifiedColor:{R:0,G:0,B:0,A:1}
        }
    }
    let spin    
    let viewport
    function preview() {
        purge(previewWorld)
        generate_spiral(previewWorld, data)
        viewport.Redraw()
    }
    function tick() {
        if (--spin > 0) {
            process.nextTick(tick)
        } else {
            spin = null
            preview()
        }
    }
    function touch() {
        if (!spin) {
            process.nextTick(tick)
        }
        spin = 10        
    }
    let filter = ''
    let filter_listeners = []
    let listeners = []
    let viewportDesign = 
        UMG(JavascriptEditorViewport,
        {
            OnDraw:(_PDI,elem) => {
                let PDI = JavascriptPDI.C(_PDI)
                PDI.SetHitProxy('Line')
                PDI.DrawDashedLine({},{X:1000,Z:1000},{R:1,A:1},4,'SDPG_World',0)
                PDI.SetHitProxy('Circle')
                PDI.DrawCircle({},{X:1},{Y:1},{R:1,A:1},1000,32,'SDPG_World',2)
                PDI.SetHitProxy('None')  
            },
            OnClick:(click,proxy) => {
                console.log(proxy.GetName())
            },
            $link:elem => {
                viewport = JavascriptEditorViewport.C(elem)
                process.nextTick(__ => {                    
                    previewWorld = viewport.GetViewportWorld()
                    generate_spiral(previewWorld, data)                      
                })  
                elem.updateData = _ => {
                    purge(previewWorld)
                    generate_spiral(previewWorld, data)
                    redraw()
                }
                listeners.push(elem)
            },            
            $unlink:elem => {
                listeners.splice(listeners.indexOf(elem),1)                
            }
        },
            UMG.text(
                {
                    Font : {
                        FontObject : GEngine.SmallFont,
                        Size : 7
                    },
                },
                "SPIRAL GENERATOR PREVIEW"
            )
        )
    let editorDesign = 
        UMG(PropertyEditor,
        {            
            'slot.size.size-rule':'Fill',
            OnChange: _ => {
                touch()
            },
            $link:elem => {
                elem.SetObject(data)
                elem.updateData = _ => {
                    elem.SetObject(data)
                }
                listeners.push(elem)
            },
            $unlink:elem => {
                listeners.splice(listeners.indexOf(elem),1)
            }
        })   
    
    let _ = require('lodash')
    
    let editorStyle = new JavascriptStyleSet
    editorStyle.StyleSetName = 'EditorStyle'
    
    let browserDesign =
    UMG.div({},
        UMG(JavascriptSearchBox,
            {
                HintText: 'Spiral database',
                OnTextChanged: text => {
                    filter = text
                    filter_listeners.forEach(filter => filter.updateFilter(filter))
                }
            }
        ),
        UMG(Border,
            {
                'slot.size.size-rule' : 'Fill',
                Background: editorStyle.GetBrush('ProjectBrowser.Background')
            },        
            UMG(JavascriptTreeView,
            {                
                ItemHeight: 20,
                Columns: [
                    {
                        Id: 'First',
                        Width: 0.5
                    },
                    {
                        Id: 'Second',
                        Width: 0.5
                    }
                ],
                OnGenerateRowEvent: (item, column) => {
                    let design = 
                        UMG(JavascriptTextBlock,
                            {
                                Font : {
                                    FontObject : GEngine.SmallFont,
                                    Size : 10
                                },
                                HighlightTextDelegate : _ => filter,
                                Text : item ? item.desc : column
                            }
                        )
                    return instantiator(design)
                },
                OnGetChildren: (item,list) => {
                    list.Children = _.range(3).map(gen)
                },
                $link:elem => {
                    elem.JavascriptContext = Context
                    elem.proxy = {
                        OnSelectionChanged: item => {
                            data = item
                            listeners.forEach(listener => listener.updateData())  
                        },
                    }
                    let items = _.range(10).map(gen)
                    function update() {
                        elem.Items = _.filter(items,item => filter == '' || item.desc.indexOf(filter) >= 0)
                        elem.RequestTreeRefresh()
                    }
                    
                    update()
                    
                    filter_listeners.push(elem)
                    elem.updateFilter = __ => {
                        update()
                    }
                },
                $unlink:elem => {
                    filter_listeners.splice(filter_listeners.indexOf(elem),1)
                }
            }
            )
        )
    ) 
    
    
    function makeTab(id,design) {
        let tabs = global[id] = []
        var tab = new JavascriptEditorTab
        tab.TabId = id
        tab.Role = 'PanelTab'
        tab.DisplayName = 'Inner'
        tab.OnSpawnTab = _ => {
            let widget = instantiator(design)
            tabs.push(widget)
            return widget
        }
        tab.OnCloseTab = tab => {
            tab.destroy()
            tabs.splice(tabs.indexOf(tab),1)
        }
        tab.destroy = _ => {
            tabs.forEach(t => tab.CloseTab(t))
            tabs.length = 0
        }
        return tab
    }
    
    function browserTab() {
        return makeTab('TestBrowserTab',browserDesign)        
    } 
    
    function viewportTab() {
        return makeTab('TestInnerTabViewport',viewportDesign)        
    }
    
    function editorTab() {
        return makeTab('TestInnerTab',editorDesign)        
    }       
	
    
    let layout = JSON.stringify({
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
                        SizeCoefficient : 0.3,
                        HideTabWell: 'true',
                        Tabs: [
                            {                                
                                TabId: 'TestBrowserTab',
                                TabState: 'OpenedTab'  
                            }
                        ]
                    },
                    {
                        Type: 'Splitter',
                        Orientation: 'Orient_Vertical',
                        SizeCoefficient : 0.7,
                        Nodes : [
                            {
                                Type: 'Stack',
                                SizeCoefficient : 0.5,
                                HideTabWell: 'true',
                                Tabs: [
                                    {                                
                                        TabId: 'TestInnerTabViewport',
                                        TabState: 'OpenedTab'  
                                    }
                                ]
                            },
                            {
                                Type: 'Stack',
                                SizeCoefficient : 0.5,
                                HideTabWell: 'true',
                                Tabs: [
                                    {                                
                                        TabId: 'TestInnerTab',
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
    
    let tabManager = new JavascriptEditorTabManager(JavascriptLibrary.CreatePackage(null,'/Script/Javascript'))
    tabManager.Tabs = [editorTab(),viewportTab(),browserTab()]
    tabManager.Layout = layout
    
    function makeCommands() {
        let context = JavascriptMenuLibrary.NewBindingContext('SpiralGenerator','Test menu','',StyleSetName);  
        let commands = new JavascriptUICommands
        
        function init() {
            commands.BindingContext = context
            commands.Commands = [
            {
                Id: 'Generate',
                FriendlyName : 'Generate!',
                Description : 'Hello Javascript',
                ActionType : 'Button',
                DefaultChord: {
                    Key: {
                        KeyName: 'B',
                    },
                    bAlt: true
                }
            },
            {
                Id : 'Purge',
                FriendlyName : 'Purge',
                Description : 'Hello Javascript',
                ActionType : 'Button',
                DefaultChord: {
                    Key: {
                        KeyName: 'A',
                    },
                    bAlt: true
                }
            },
            {
                Id: 'Connect',
                FriendlyName : 'Connect',
                Description : 'Hello Javascript',
                ActionType : 'RadioButton'
            },
            {
                Id: 'Disconnect',
                FriendlyName : 'Disconnect',
                Description : 'Hello Javascript',
                ActionType : 'RadioButton'
            }
            ]
            commands.Initialize();    
        }        
        
        let connected = false
        commands.OnExecuteAction = (what) => {
            switch (what) {
                case 'Connect' : 
                    connected = true
                    break
                case 'Disconnect' :            
                    connected = false
                    break
                case 'Generate' : 
                    generate(data)
                    break
                case 'Purge' :
                    clear()
                    break
            }
        }        
        
        commands.OnCanExecuteAction = (what) => {
            if (what == 'Connect' && connected || what == 'Disconnect' && !connected) return false
            return true
        }
        
        commands.OnIsActionChecked = (what) => {
            if (what == 'Connect') {
                return !connected
            } else if (what == 'Disconnect') {
                return connected
            } else {
                return true
            }
        }
       
        function uninit() {
            commands.Uninitialize();
            context.Destroy();
        }
        
        init();
        
        commands.destroy = uninit
        
        return commands        
    }
    
    let commands = makeCommands()
        
    let commandList = JavascriptMenuLibrary.CreateUICommandList()
    commands.Bind(commandList)    
    
    return instantiator(
        UMG.div(
            {
                $link:elem => {
                    elem.AddChild(tabManager).Size.SizeRule = 'Fill'  
                },
                $unlink:elem => {
                    tabManager.Tabs.forEach(tab => tab.destroy())
                    tabManager = null
                    commands.destroy()
                }
            },
            UMG(JavascriptMultiBox,{
                CommandList : commandList,
                OnHook : (id,elem,builder) => {
                    if (id == 'Main') {                        
                        try { 
                            JavascriptMenuLibrary.CreateMenuBarBuilder(commandList,builder => {
                                elem.AddPullDownMenu(builder,'Test',"TEST","TEST")
                                JavascriptMultiBox.Bind(builder)
                            })
                        } catch (e) {
                            console.error(String(e))
                        } 
                          
                    } else if (id == 'Test') {
                        builder.PushCommandList(commandList)
                        builder.BeginSection("Test Section")
                        builder.AddToolBarButton(commands.CommandInfos[0]);
                        builder.AddToolBarButton(commands.CommandInfos[1]);
                        elem.AddSubMenu(builder,'Sub','Sub menu','Sub menu tooltip',false)
                        builder.EndSection()
                    } else if (id == 'Sub') { 
                        builder.PushCommandList(commandList)
                        builder.BeginSection("Sub  Section")
                        builder.AddToolBarButton(commands.CommandInfos[2]);
                        builder.AddToolBarButton(commands.CommandInfos[3]);
                        builder.AddWidget(instantiator(UMG.text({TextDelegate:_ => `${Math.random().toFixed(3)}`},"TEST")),"Widget")
                        builder.EndSection()                    
                    } else {
                        console.log("UNHANDLED",id)
                    }          
                }
            }),            
            UMG(JavascriptMultiBox,{
                CommandList : commandList,
                OnHook : __ => {
                    JavascriptMenuLibrary.CreateToolbarBuilder(commandList,'Orient_Horizontal',builder => {
                        builder.BeginSection("Spiral")
                        builder.AddToolBarButton(commands.CommandInfos[0]);
                        builder.AddToolBarButton(commands.CommandInfos[1]);
                        builder.EndSection()
                        builder.AddSeparator()
                        builder.AddToolBarButton(commands.CommandInfos[2]);
                        builder.AddToolBarButton(commands.CommandInfos[3]);
                        builder.AddWidget(instantiator(UMG.text({TextDelegate:_ => `${Math.random().toFixed(3)}`},"TEST")))
                        JavascriptMultiBox.Bind(builder)
                    }) 
                }
            }) 
        )
    )
}

module.exports = function () {
	let maker = require('editor-maker')
    
    let Icon40x40 = {X:40,Y:40}
    let style = JavascriptUMGLibrary.CreateSlateStyle(StyleSetName)
    style.SetContentRoot( Context.GetDir('EngineContent') + "Editor/Slate" );
	style.SetCoreContentRoot( Context.GetDir('EngineContent') + "Slate" );    
    style.AddImageBrush("SpiralGenerator.Purge", style.RootToContentDir("Icons/icon_DevicePowerOff_40x.png"), Icon40x40, {R:1,G:1,B:1,A:1}, 'NoTile', 'FullColor' )
    style.AddImageBrush("SpiralGenerator.Generate", style.RootToContentDir("Icons/icon_DevicePowerOn_40x.png"), Icon40x40, {R:1,G:1,B:1,A:1}, 'NoTile', 'FullColor' ) 
    style.Register()

	let opts = {
		DisplayName: "SpiralGenerator",
		TabId: "SpiralGenerator@"
	}    
        
	maker.tabSpawner(opts,main);        
    
	return _ => { 
        style.Unregister()
    }
}
