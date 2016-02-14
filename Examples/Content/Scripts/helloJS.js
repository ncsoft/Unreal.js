(function (global) {
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
                    let child = elem.add_child(UMG.text({Font:{Size:18}},msg))
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
        class MyDraggable extends JavascriptWidget {
            AddChild(x) {
                this.SetRootWidget(x)
                return {}
            }
            RemoveChild(x) {
                this.SetRootWidget(null)
            }
            OnDragOver(geom,event,op) {
                let abs = KismetInputLibrary.GetScreenSpacePosition(event)
                let local = SlateBlueprintLibrary.AbsoluteToLocal(geom,abs)
                return WidgetBlueprintLibrary.Handled() 
            }
            OnDragDetected() {
                return {
                    $: WidgetBlueprintLibrary.Handled(),
                    Operation: WidgetBlueprintLibrary.CreateDragDropOperation(null)   
                } 
            }
            OnMouseButtonDown(geom,event) {
                return WidgetBlueprintLibrary.DetectDragIfPressed(event,this,{KeyName:'LeftMouseButton'})
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
            }
        }
        let MyDraggable_C = uclass(MyDraggable)
        let MyDropTarget_C = uclass(MyDropTarget)
        let widget = root.add_child(
            UMG.div({},
                UMG(MyDraggable_C,{},
                    UMG(Border,{BrushColor:{A:0.5}},"X")
                ),
                UMG(MyDropTarget_C,{},
                    UMG(Border,{BrushColor:{R:1,A:0.5}},"Drop target")
                )
            )            
        )
        return _ => {
            root.remove_child(widget)
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
            UMG.div({$link:elem => root = elem}),
            UMG(Border,{
                'Slot.Size.Rule':'Fill',
                'Slot.VerticalAlignment':'VAlign_Bottom',
                'BrushColor':{A:0.5}
                },                
                logger.window()
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
})(this)
