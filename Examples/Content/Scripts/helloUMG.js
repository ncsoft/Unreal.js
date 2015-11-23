(function (global) {
    "use strict"

    function GetPC() {
        return PlayerController.C(GWorld.GetAllActorsOfClass(PlayerController).OutActors[0])
    }

    function main() {
        let widget = null
        let PC = GetPC()

        // create a widget
        widget = GWorld.CreateWidget(JavascriptWidget, PC)
        widget.JavascriptContext = Context
        widget.bSupportsKeyboardFocus = true

        let UMG = require('UMG')

        // low-level json which describes UMG structure to set up.
        let design = UMG.span({},
            UMG(Button,{'slot.size.size-rule':'Fill'},UMG.text({},"Hello")),
            UMG.div({'slot.size.size-rule':'Fill'},
                UMG(Button,{'slot.size.size-rule':'Fill'},UMG.text({},"UMG")),
                UMG(Button,{'slot.size.size-rule':'Fill'},UMG.text({},"!!!!"))
            )
        )

        let instantiator = require('instantiator')
        let page = instantiator(design)

        page.Visibility = 'Visible'

        widget.SetRootWidget(page)
        widget.AddToViewport()

        // Switch PC to UI only mode.
        PC.bShowMouseCursor = true
        PC.SetInputMode_UIOnly(page)

        return function () {
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
        require('bootstrap')('helloUMG')
    }
})(this)
