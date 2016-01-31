(function (global) {
    "use strict"

    const UMG = require('UMG')
    const _ = require('lodash')
    const uclass = require('uclass')().bind(this,global)

    function tutorial_StaticMeshActor() {
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
            actor.DestroyActor()
        }
    }

    let tutorials = {
        'Static mesh actor' : tutorial_StaticMeshActor
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

    function app() {
        let logger = Logger()

        let cur
        return UMG.div({$link:elem => {
                elem.bye = _ => {
                    console.log('done')
                    cur && cur()
                    logger.destroy()
                }
            }},
            _.map(tutorials,(v,k) =>
                UMG(Button,{OnClicked:_ => {
                    cur && cur()
                    cur = v()
                }},UMG.text({},k)
            )),
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
