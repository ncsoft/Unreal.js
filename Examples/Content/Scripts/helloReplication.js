/// <reference path="typings/ue.d.ts">/>
(function (global) {
    "use strict"

    class MyActor extends Actor {
        ctor() {
            this.bAlwaysRelevant = true
        }

        properties() {
            this.Hello/*Replicated+EditAnywhere+int*/;
            this.World/*Replicated+EditAnywhere+Actor*/;
            this.Position/*EditAnywhere+Vector*/;
        }

        ReceiveBeginPlay() {
            super.ReceiveBeginPlay()

            console.log("Hello, this is MyActor")
        }

        // RPC function!
        test(data/*float*/)/*NetMulticast*/ {
            if (this.Role == 'ROLE_Authority') {
                this.Hello++
            }
            console.log('multicast!',data,this.GetName(),this.Hello,this.Role)
        }
    }

    let MyActor_C = require('uclass')()(global,MyActor)

    let _ = require('lodash')

    function GetPC() {
        return GWorld.GetAllActorsOfClass(PlayerController).OutActors[0]
    }
    function main() {
        // Replicated actor should be created in server node.
        if (GWorld.IsServer()) {
            let actor = new MyActor_C(GWorld,{X:1})

            // replace this actor, please.
            actor.SetReplicates(true)

            let alive = true
            function kick() {
                if (!alive) return
                actor.test(Math.random())
                setTimeout(kick,1000)
            }

            kick()

            return function () {
                alive = false
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
        require('bootstrap')('helloReplication')
    }
})(this)
