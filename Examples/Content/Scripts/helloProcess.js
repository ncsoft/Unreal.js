(function (global) {
    "use strict"

    function GetPC() {
        return PlayerController.C(GWorld.GetAllActorsOfClass(PlayerController).OutActors[0])
    }

    function makeDisplay() {
        let text = ''
        let appendText = (message) => {
            if (message != '') {
                text += message
            }
        }

        class MyHUD extends HUD {
            ctor() {
            }

            ReceiveDrawHUD() {
                super.ReceiveDrawHUD()

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

        let MyHUD_C = require('uclass')()(global,MyHUD);
        GetPC().ClientSetHUD(MyHUD_C)

        return appendText
    }

    function main() {
        let appendText = makeDisplay()

        appendText("executing node.js:\n")

        // This function will be executed within node.js.
        function test() {
            [1,2,3,4,5].forEach(function(x,i) {
                setTimeout(function () {
                    console.log('Node.js is speaking ' + x)
                }, i * 1000 )
            } )
        }

        let alive = true

        // Create a node.js process
        let proc = JavascriptProcess.Create(
            'node',
            `-e "${String(test)}; test()"`,
            true,false,false,0,'',true
        )

        if (proc) {
            let kick = () => {
                // read from pipe!
                appendText(proc.ReadFromPipe())

                // if process is still running
                if (proc.IsRunning()) {
                    process.nextTick(kick)
                } else {
                    appendText("<end of execution>")
                }
            }

            kick()
        } else {
            appendText("failed to create process")
        }

        return function () {
            alive = false

            // close the process if we have one
            if (proc) {
                proc.Close()
            }
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
        require('bootstrap')('helloProcess')
    }
})(this)


