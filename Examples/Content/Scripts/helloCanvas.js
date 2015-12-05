(function (global) {
    "use strict"

    // find a local player controller
    function GetPC() {
        // out-ref function returns an object which contains out-ref params and return param.
        // eg) bool USomeClass::Func(int a, int* b, int* c); -> {$:{bool}, b:{int}, c:{int}}
        return PlayerController.C(GWorld.GetAllActorsOfClass(PlayerController).OutActors[0])
    }

    function main() {
        // set cursor type
        GetPC().DefaultMouseCursor = Symbol('Default')

        // declare our own HUD class
        class MyHUD extends HUD {
            ctor() {
            }

            // override ReceiveDrawHUD
            ReceiveDrawHUD() {
                // don't forget to its super function
                super.ReceiveDrawHUD()

                // have fun with Canvas
                let text = `Hello Canvas : ${new Date().toISOString()}`

                this.Canvas.DrawText(
                    GEngine.SmallFont,
                    text,
                    {X:this.Canvas.SizeX/2,Y:this.Canvas.SizeY/2},
                    {R:1,G:1,B:1,A:1},
                    0,
                    {R:0,G:0,B:0,A:1},
                    {X:1,Y:1},
                    true,true,true,
                    {R:0,G:0,B:0,A:1}
                )
            }
        }

        // register new HUD class
        let MyHUD_C = require('uclass')()(global,MyHUD);

        // and instantiate it
        GetPC().ClientSetHUD(MyHUD_C)

        // no mess to clean
        return function () {
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
        require('bootstrap')('helloCanvas')
    }
})(this)
