/// <reference path="../typings/ue.d.ts">/>
let _ = require('lodash')

let localStorage = require('./lib/localStorage')

let selector = require('./selector')

function prepare() {
    GWorld.ExecuteConsoleCommand("DisableAllScreenMessages")
    let pc = GWorld.GetPlayerController(0)
    pc.bShowMouseCursor = true
    pc.SetInputModeUIOnly()
}

let scenes = {
    'Cables': require('./demo-cable'),
    'AI' : require('./demo-ai'),
    'REST' : require('./demo-rest'),
    'Deep-learning' : require('./demo-deeplearning')
}

async function main(defer,reset) {
    prepare()    

    let busy
    function ready() {
        busy = true
        defer(_ => busy = false)
    }
    ready()

    let scene = localStorage.get('demo')
    let sceneIds = _.keys(scenes) 
    if (sceneIds.indexOf(scene)<0) {
        scene = sceneIds[0]
    }

    while (busy) {
        let fn = scenes[scene]
        if (typeof fn == 'function') {
            fn(defer).catch(e => console.error(e.stack))
        }
        scene = await selector(defer,sceneIds)
        localStorage.set('demo',scene)
        reset()
        ready()
    }        
}

module.exports = main