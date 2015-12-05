/// <reference path="typings/ue.d.ts">/>
(function (global) {
    "use strict"

    // To specify binding flag, pass '-flag' or '+flag' as a decorator.
    //
    // eg) AxisBinding[Turn,-bConsumeInput]
    //
    // FBlueprintInputDelegateBinding
    //     bConsumeInput, bExecuteWhenPaused, bOverrideParentBinding

    class MyPlayerController extends PlayerController  {
        Wave() /*ActionBinding[Wave]*/ {
            console.log("Wave!!")
        }

        Jump() /*ActionBinding[Jump2,IE_Released]*/ {
            console.log("Jump!!")
        }

        Hi() /*KeyBinding[Ctrl+E]*/ {
            console.log("Hi!")
        }

        Turn(value/*float*/) /*AxisBinding[Turn,-bConsumeInput]*/ {
            if (value) {
                console.log("Turn2",value)
            }
        }
    }

    function GetPC() {
        return GWorld.GetAllActorsOfClass(PlayerController).OutActors[0]
    }

    // Switch PlayerController class to JS generated one.
    let MyPC_C = require('uclass')()(global,MyPlayerController)
    GWorld.GetGameMode().PlayerControllerClass = MyPC_C

    if (GetPC()) {
        GWorld.GetGameMode().HandleSeamlessTravelPlayer(GetPC())
    }

    function main() {
        return () => {}
    }

    try {
        module.exports = () => {
            let cleanup = null
            process.nextTick(() => cleanup = main());
            return () => cleanup()
        }
    }
    catch (e) {
        require('bootstrap')('helloInputBinding')
    }
})(this)
