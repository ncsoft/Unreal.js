/// <reference path="typings/ue.d.ts">/>

(function (global) {
    "use strict"

    // Blueprint class can be subclassed!
    class MyActor extends Blueprint.Load('/Game/ExampleBlueprint').GeneratedClass {
        // constructor
        ctor() {
            // Subobject initialization, property initialization
            this.bAlwaysRelevant = true
        }

        // declare UPROPERTY's here
        // ; this.XXXXX/*[attribute+]+type*/;
        properties() {
            this.Hello/*Replicated+EditAnywhere+int*/;
            this.World/*Replicated+EditAnywhere+Actor*/;
            this.Position/*EditAnywhere+Vector[]*/;
            this.Some/*EditAnywhere+DistanceDatum*/;
        }

        // Overriding function doesn't need function signature
        ReceiveBeginPlay() {
            super.ReceiveBeginPlay()

            console.log("Hello, this is MyActor")
        }

        // Override an event which was declared in Blueprint
        CustomEvent() {
            console.log("This is javascript")
        }

        // New UFUNCTION needs proper function signature
        // ; function-name(arg/*type*/,...) /*UFUNCTION-flag[+another flag]*/
        NewFunction(x/*int*/,y/*int*/) /*NetMulticast*/ {
            console.log(x+y);
        }
    }

    let MyActor_C = require('uclass')()(global,MyActor)

    let _ = require('lodash')

    function GetPC() {
        return GWorld.GetAllActorsOfClass(PlayerController).OutActors[0]
    }

    function main() {
        if (GWorld.IsServer()) {
            let actor = new MyActor_C(GWorld,{X:1})

            return function () {
                actor.DestroyActor()
            }
        } else {
            return function() {}
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
        require('bootstrap')('helloBlueprint')
    }
})(this)
