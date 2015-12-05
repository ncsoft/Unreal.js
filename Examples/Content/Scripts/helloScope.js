(function (global) {
    "use strict"

    let _ = require('lodash')

    function rootScope(scope) {
        scope.text = 'Hello Scope!'
        scope.count = 0
        scope.inc = () => scope.count++
        scope.items = []
        scope.discard = (item) => {
            scope.items = _.filter(scope.items,(i) => i != item)
        }
        scope.add = () => {
            scope.items.push({key:Math.random(),value:Math.random()})
        }
        _.range(0,10).forEach(()=>scope.add())
    }

    function makePage(design) {
        let UMG = require('UMG');
        let Style = require('style');

        let page = UMG.app(design,rootScope)
        let ES = JavascriptEditorStyle;

        page.set_styles([
            Style('.full',{'slot.size.size-rule':'Fill'}),
            Style('Button',{'WidgetStyle':ES.GetButtonStyle('FlatButton.Default')},
                Style('TextBlock',{'font.size':53})
            ),
            Style('TextBlock',{'font.size':43}),
            Style('.yellow',{'color-and-opacity.specified-color':{R:1,G:1,B:0.2,A:1}}),
            Style('.small',{'font.size':23},
                Style('TextBlock',{'font.size':23})
            ),
            Style('EditableText',{WidgetStyle:{'font.size':43}})
        ])

        return page
    }

    function GetPC() {
        return PlayerController.C(GWorld.GetAllActorsOfClass(PlayerController).OutActors[0])
    }

    function main() {
        let cleanup = null
        let PC = GetPC()

        function setup(design) {
            let page = makePage(design)

            let widget = WidgetBlueprintLibrary.CreateWidget(GWorld, JavascriptWidget, PC)
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

        let devjade = require('devjade')
        cleanup = devjade('views/helloScope.jade',setup)

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
        require('bootstrap')('helloScope')
    }
})(this)
