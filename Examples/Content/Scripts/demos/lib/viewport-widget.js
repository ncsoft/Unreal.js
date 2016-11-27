let instantiator = require('instantiator')
let UMG = require('UMG')

function viewport_widget() {
    let widget = GWorld.CreateWidget(JavascriptWidget, GWorld.GetPlayerController(0))
    widget.proxy = {}
    widget.JavascriptContext = Context
    let elem
    widget.SetRootWidget(instantiator(UMG(SizeBox,{$link:_elem => elem = _elem})))
    widget.AddToViewport()
    elem.destroy = function () {        
        widget.RemoveFromViewport()
    }
    return elem
}

module.exports = viewport_widget