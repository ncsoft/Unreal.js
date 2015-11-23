(function (global) {
    "use strict"

    function GetPC() {
        return PlayerController.C(GWorld.GetAllActorsOfClass(PlayerController).OutActors[0])
    }

    function main() {
        let cleanup = null
        let PC = GetPC()

        function setup(design) {
            let instantiator = require('instantiator');
            let page = instantiator(design)

            let widget = GWorld.CreateWidget(JavascriptWidget, PC)
            widget.JavascriptContext = Context
            widget.bSupportsKeyboardFocus = true

            page.Visibility = 'Visible'
            widget.SetRootWidget(page)
            widget.AddToViewport()
            PC.SetInputMode_UIOnly(page)
            PC.bShowMouseCursor = true

            let cleanup = function() {
                widget.RemoveFromViewport()
            }
            cleanup.$files = design.$files
            return cleanup
        }

        // live-reloading jade!
        let devjade = require('devjade')
        cleanup = devjade('views/helloJade.jade',setup)

        return function () {
            cleanup()
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
        require('bootstrap')('helloJade')
    }
})(this)
