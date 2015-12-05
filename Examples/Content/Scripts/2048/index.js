(function () {
    "use strict";

    module.exports = function () {
        function GetPC() {
            return GWorld.GetAllActorsOfClass(PlayerController).OutActors[0]
        }

        let PC = GetPC()

        // Widget을 만들자
        var widget = WidgetBlueprintLibrary.CreateWidget(GWorld, JavascriptWidget, PC)
        widget.proxy = {}
        widget.JavascriptContext = Context
        widget.bSupportsKeyboardFocus = true

        // Setup location / rotation
        PC.GetControlledPawn().SetActorLocation({X:854,Z:300})
        PC.SetInitialLocationAndRotation({},{Yaw:170,Pitch:0,Roll:0})

        var data = {
            Block : StaticMesh.Load('/Engine/BasicShapes/Cube.Cube'),
            Spacing : 120,
            Size: 4
        }

        var update = null
        var _ = require('lodash')

        var page = new VerticalBox
        page.Visibility = 'Visible'

        widget.SetRootWidget(page)
        widget.AddToViewport()

        // UIOnly mode로 설정
        PC.bShowMouseCursor = true
        WidgetBlueprintLibrary.SetInputMode_UIOnly(PC,page)

        // Game 설정
        var game = null

        function start_game() {
            if (game != null) {
                game()
            }
            try {
                game = require('game/application')(widget, page, data)
            }
            catch (e) {
                console.error("EXCEPTION",String(e),e.stack)
            }
        }

        start_game()

        update = start_game

        return function () {
            // for live reload
            game()
            widget.RemoveFromViewport()
            // live_jade()
        }
    }
})()
