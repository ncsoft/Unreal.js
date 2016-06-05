/// <reference path="typings/ue.d.ts">/>
"use strict"

class MyPC extends PlayerController {
    ReceiveBeginPlay() {
        super.ReceiveBeginPlay()

        console.log("Hello, this is MyPC")
    }
    
    // RPC function!
    test(data/*float*/)/*NetMulticast*/ {
        console.log('multicast!',data,this.GetName(),this.Role)
    }
    
    TestBinding()/*KeyBinding[Ctrl+E]*/{
       this.Server_Call();
    }   
    
    Server_Call()/*Server*/ {
        console.log('this is server call',this.Role);
        this.test($time);
    }     
}

let MyPC_C = require('uclass')()(global,MyPC)


let _ = require('lodash')

function main() {
    // Replicated actor should be created in server node.
    if (GWorld.IsServer()) {

        Root.GetOuter().PlayerControllerClass = MyPC_C

        let alive = true

        return function () {
            alive = false
        }
    } else {
        return function() {}
    }
}

try {
    module.exports = () => {
        let cleanup = null
        cleanup = main();
        return () => cleanup()
    }
}
catch (e) {
    require('bootstrap')('helloGame')
}
