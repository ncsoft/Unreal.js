"use strict"

const UMG = require('UMG')
const _ = require('lodash')
const uclass = require('uclass')().bind(this,global)

let game_mode, ui_mode

function tutorial_WebSocket() {
    // borrowed from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
    function ab2str(buf) {
        return String.fromCharCode.apply(null, new Uint16Array(buf));
    }
    function str2ab(str) {
        var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
        var bufView = new Uint16Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }
    
    let server = JavascriptWebSocketServer.Create(8080)
    server.OnConnected = (conn) => {
        console.log('client joined')
        conn.OnReceived = _ => {
            let ab = new ArrayBuffer(1024)            
            memory.exec(ab,_ => {
                conn.CopyBuffer()
                console.log('received',ab2str(ab))
            })                
        }
    }
    let client = JavascriptWebSocket.Connect("127.0.0.1:8080")
    client.OnConnected = _ => {
        console.log('connected to server')
        memory.exec(str2ab("Hello Websocket."),ab => {
            client.SendMemory(ab.byteLength)    
        })            
    }
    let alive = true
    
    function tick() {
        if (!alive) return
        server.Tick()
        client.Tick()
        process.nextTick(tick)
    }
    
    tick()
    
    return __ => {
        server.Dispose()
        client.Dispose()
        alive = false
    }
}

function tutorial_StaticMeshActor() {
    game_mode()
    console.log('creating a static mesh actor')
    class MySMA extends StaticMeshActor {
        ctor() {
            let smc = this.StaticMeshComponent
            let mtrl = GWorld.CreateDynamicMaterialInstance(Material.Load('/Game/Color.Color'))
            mtrl.SetVectorParameterValue('Color',{G:1,A:1})
            smc.SetStaticMesh(StaticMesh.Load('/Engine/BasicShapes/Cube.Cube'))
            smc.SetMaterial(0,mtrl)
        }
    }
    let actor = new (uclass(MySMA))(GWorld,{Z:100})
    return _ => {
        ui_mode()
        actor.DestroyActor()
    }
}

let tutorials = {
    'Static mesh actor' : tutorial_StaticMeshActor,
    'Web socket' : tutorial_WebSocket,
    'Draggable' : tutorial_Draggable
}

function Logger() {
    let log
    class MyOutput extends JavascriptOutputDevice {
        OnMessage(msg,verbosity,category) {
            log && log([category,msg].join(':'))
        }
    }
    let outputDevice = new (uclass(MyOutput))

    function LogWindow() {
        return UMG.div({$link:elem => {
            function add(msg) {
                let child = elem.add_child(UMG.text({
                    Font:{
                        FontObject : GEngine.SmallFont,
                        Size:18
                    }},msg))
                setTimeout(_ => elem.remove_child(child),5000)
            }

            log = add
        }})
    }

    return {
        destroy : _ => outputDevice.Kill(),
        window : LogWindow
    }
}

function tutorial_Draggable(root) {
    for (var i=0; i<1000; ++i) {
i += i;
}


    //v8.SetSamplingInterval(100)
    //v8.StartProfiling("main",false)
    let sprite
    let mygeom
    let ad = require('animation-driver')()
    class DragOp extends DragDropOperation {
        Dragged(event) {
            let pos = UPointerEvent.C(event).GetScreenSpacePosition()
            pos = Geometry.C(mygeom).AbsoluteToLocal(pos)
            sprite.Slot.SetPosition(pos)
        }
        Drop(event) {
            sprite.SetVisibility('Hidden')
            console.log('ok')
        }
        DragCancelled(event) {
            sprite.SetVisibility('Hidden')
            console.log('cancel')
        }
    }
    let DragOp_C = uclass(DragOp)
    class MyDraggable extends JavascriptWidget {
        AddChild(x) {
            this.SetRootWidget(x)
            return {}
        }
        RemoveChild(x) {
            this.SetRootWidget(null)
        }
        OnDragDetected() {
            let op = WidgetBlueprintLibrary.CreateDragDropOperation(DragOp_C)
            sprite.SetVisibility('Visible')
            return {
                $: EventReply.Handled(),
                Operation: op   
            } 
        }
        OnMouseButtonDown(geom,event) {
            mygeom = geom
            return event.DetectDragIfPressed(this,{KeyName:'LeftMouseButton'})
        }
    }
    class MyDropTarget extends JavascriptWidget {
        AddChild(x) {
            this.SetRootWidget(x)
            return {}
        }
        RemoveChild(x) {
            this.SetRootWidget(null)
        }
        OnDrop(x) {
            console.log('dropped',x)
            return EventReply.Handled()
        }
    }
    let MyDraggable_C = uclass(MyDraggable)
    let MyDropTarget_C = uclass(MyDropTarget)
    function binding() {
        let data = {
            wrap: (bindings,design) => {
                let old = design.$link
                data.bindings = bindings
                design.$link = elem => {
                    old && old()
                    data.widget = elem
                }
                return design
            },
            set: (value) => {
                function update() {
                    let bag = {}
                    _.each(data.bindings,(v,k) => {
                        bag[k] = v(value)
                    })
                    data.widget.set_attrs(bag)
                }
                if (data.widget) {
                    update()
                } else {
                    process.nextTick(update)
                }                
            }
        }
        return data
    }
    function repeat() {
        let data = {
            map : fn => {
                data.fn = fn
                data.$map = new Map()
                return UMG.div({$link:elem => {
                    data.elem = elem
                }})
            },
            set : arr => {
                function update(arr) {
                    let old = data.old || []
                    let added = _.difference(arr,old)
                    let removed = _.difference(old,arr)
                    data.old = arr        
                    let parent = data.elem.GetParent()    
                    removed.forEach(x => {
                        parent.remove_child(data.$map.get(x))
                        data.$map.delete(x)
                    })        
                    added.forEach(x => {
                        x.$binding = binding()
                        x.$binding.set(x)
                        let widget = parent.add_child(data.fn(x))
                        data.$map.set(x,widget)
                    })
                }
                if (data.elem) {
                    update(arr)
                } else {
                    process.nextTick(_ => update(arr))
                }
            }
        }          
        return data      
    }
    let a = {value:1}
    let data = repeat()
    data.set([a,{value:2},{value:3}])
    data.set([a])
    process.nextTick(_ => {
        a.value = 9
        a.$binding.set(a)
    })
    
    let data3 = [1,2,3,4,5,6,7,8,9]
    let N = 0
    let interval = setInterval(_ => data3.push(N++), 500)
    let interval2 = setInterval(_ => data3.shift(), 500)
    
    function bye() {
       clearInterval(interval)
        clearInterval(interval2)
    }

    let data2 = binding()
    data2.set({value:9282})
    data2.set({value:9281})
    console.log("INIT")
    
    function dyn_wrap(data3,bindings,design) {            
        let elem
        function update(value) {
            let bag = {}
            _.each(bindings,(v,k) => {
                bag[k] = v(value)
            })
            elem.set_attrs(bag)
        }
        function listener() {
            update(data3)
        }
        function link() {
            Object.observe(data3,listener,['update'])                
        }
        function unlink() {
            Object.unobserve(data3,listener)
        }           
        
        let old = design.$link
        design.$link = _elem => {
            elem = _elem
            old && old()        
            update(data3)
        }
        let old_unlink = design.$unlink
        design.$unlink = _ => {
            old_unlink && old_unlink()
            unlink()
        }
        return design
    }
    
    function dyn_map(data3,fn) {
        let elem
        let map = new Map()
        let old = [...data3]
        function add(added) {
            added.forEach(data => {
                map.set(data,elem.add_child(fn(data)))
            })
        }
        function remove(removed) {
            removed.forEach(x => {
                elem.remove_child(map.get(x))
                map.delete(x)
            })
        }
        function listener(changes) {
            let added = _.difference(data3,old)
            let removed = _.difference(old,data3)
            old = [...data3]
            add(added)
            remove(removed)
        }                           
        function link(_elem) {
            elem = _elem                
            add(data3)
            Object.observe(data3,listener,['update'])                
        }
        function unlink() {
            Object.unobserve(data3,listener)
        }
        return UMG.div({$link:link,$unlink:unlink})
    }
    let widget = root.add_child(
        UMG(Overlay,{'Slot.Size.Rule':'Fill','VerticalAlignment':'VAlign_Fill'},
            UMG.div({'Slot.HorizontalAlignment':'HAlign_Fill'},
                UMG(MyDraggable_C,{},
                    UMG(Border,{BrushColor:{A:0.5}},"X")
                ),
                UMG(MyDropTarget_C,{},
                    UMG(Border,{BrushColor:{R:1,A:0.5}},"Drop target")
                ),
                dyn_wrap(data3,{Text:x => `${x.length}`},UMG.text({},'uninit')),
                dyn_map(data3,x => UMG.text({},`binding ${x}`)),
                data2.wrap({Text:item=>item.value},UMG.text({},"hello")),
                data.map(x => x.$binding.wrap({Text:x => `${x.value} value`},UMG.text({},`${x} item`)))
            ),
            UMG(CanvasPanel,{
                'Visibility':'HitTestInvisible',
                'Slot.HorizontalAlignment':'HAlign_Fill','Slot.VerticalAlignment':'VAlign_Fill'
                },
                UMG(Border,{Visibility:'Hidden',$link:elem => sprite = elem}),
                0 && _.range(140).map(index => UMG(Border,{Slot:{AutoSize:true},Visibility:'Hidden',$link:elem => {
                    let cubicout = x => Math.pow(x-1,3) + 1
                    let current = {
                        X : 0,
                        Y : 0,
                        Width : 0,
                        Height : 0,
                        Opacity : 0                            
                    }
                    function MorphToShape(T,target) {
                        let prev = _.clone(current)
                        current = target
                        function lerp(t,a,b) {
                            return cubicout(t) * (b-a) + a
                        }
                        ad.apply(elem.GetContentSlot().Content,{duration:T,warm:true},{
                            WidthOverride:t => lerp(t,prev.Width,current.Width),
                            HeightOverride:t => lerp(t,prev.Height,current.Height),
                        })
                        let l = new AnchorData()
                        ad.apply(elem.Slot,{duration:T,warm:true},{
                            Layout:t => {       
                                l.Offsets.Left =  lerp(t,prev.X,target.X)
                                l.Offsets.Top = lerp(t,prev.Y,target.Y)
                                return l
                            }                                
                        })  
                        let color = new LinearColor()
                        color.R = color.G = color.B = 1
                        ad.apply(elem,{duration:T,warm:true},{
                            BrushColor:t => {
                                color.A = lerp(t,prev.Opacity,target.Opacity)
                                return color 
                            },
                            ContentColorAndOpacity:t => {
                                color.A = lerp(t,prev.Opacity,target.Opacity)
                                return color 
                            }
                        })
                    }
                    process.nextTick(_ => {
                        elem.SetVisibility('Visible')
                        MorphToShape(0.15,{X:100 + index * 20,Y:200,Width:400,Height:400,Opacity:1})
                        setTimeout(_ => {
                            MorphToShape(0.25,{X:0,Y:0,Width:0,Height:0,Opacity:0})
                        },1000)
                    })                        
                }},
                UMG(SizeBox,{},
                    UMG(Button,{}))
                )                    
            ))
        )
    )
    return _ => {
        bye()
        // console.log(JSON.stringify(v8.StopProfiling("main"),null,2))
        root.remove_child(widget)
        ad.destroy()
    }
}

function app() {
    let logger = Logger()

    let cur, root
    return UMG.div({$link:elem => {
            elem.bye = _ => {
                console.log('done')
                cur && cur()
                logger.destroy()
            }
            cur = tutorial_Draggable(root)
        }},
        _.map(tutorials,(v,k) =>
            UMG(Button,{OnClicked:_ => {
                cur && cur()
                cur = v(root)
            }},UMG.text({},k)
        )),
        UMG(Overlay,{'Slot.Size.Rule':'Fill'},
            UMG.div({'Slot.HorizontalAlignment':'HAlign_Fill','Slot.VerticalAlignment':'VAlign_Fill',$link:elem => root = elem}),
            UMG(Border,{
                'Slot.HorizontalAlignment':'HAlign_Fill',
                'Slot.VerticalAlignment':'VAlign_Bottom',
                'BrushColor':{A:0.5}
                },                
                logger.window()
            )
        )
    )
}

function main() {
    let PC = GWorld.GetPlayerController()

    class AppWidget extends JavascriptWidget {
        ctor() {
            this.bSupportsKeyboardFocus = true
        }
    }

    // create a widget
    let widget = GWorld.CreateWidget(uclass(AppWidget), PC)
    let page = (require('instantiator'))(app())

    widget.SetRootWidget(page)
    widget.AddToViewport()
    
    ui_mode = _ => {
        PlayerController.C(PC).bShowMouseCursor = true
        PlayerController.C(PC).SetInputMode_UIOnly(widget,false)                
    }
    
    game_mode = _ => {
        PlayerController.C(PC).bShowMouseCursor = true
        PlayerController.C(PC).SetInputMode_GameAndUI(widget,false,false)                
    }
    
    ui_mode()        
    
    return function () {
        page.bye()
        widget.RemoveFromViewport()
    }
}

try {
    module.exports = () => {
        let cleanup = null
        process.nextTick(() => cleanup = main());
        return () => cleanup()
    }
}
catch (e) {
    require('bootstrap')('helloJS')
}
