/// <reference path="../typings/ue.d.ts">/>
let _ = require('lodash')
let localStorage = require('./lib/localStorage')

function prepare() {
    if (this.$init) return
    this.$init = true

    GWorld.ExecuteConsoleCommand("DisableAllScreenMessages")
    let pc = GWorld.GetPlayerController(0)
    pc.bShowMouseCursor = true
    pc.SetInputModeUIOnly()

    // destroy annoying default pawn
    for (let x of GWorld.GetAllActorsOfClass(Pawn).OutActors) {
        x.DestroyActor()
    }
}

let scenes = {
    'Cables': require('./demo-cable'),
    'AI': require('./demo-ai'),
    'REST': require('./demo-rest'),
    'Deep-learning': require('./demo-deeplearning'),
    'React': require('./build/demo-react')
}

async function main(defer, reset) {
    prepare()

    let selector = require('./build/demo-selector')

    let busy
    function ready() {
        busy = true
        defer(_ => busy = false)
    }
    ready()

    let scene = localStorage.get('demo')
    let sceneIds = _.map(scenes, (v, k) => _.extend(_.clone(k), { description: v.description }))
    if (scene === null || scenes[scene] == undefined) {
        scene = sceneIds[0]
    }

    while (busy) {
        let fn = scenes[scene]
        if (typeof fn == 'function') {
            fn(defer).catch(e => console.error(e.stack))
        }
        scene = await selector(defer, sceneIds)
        localStorage.set('demo', scene)
        reset()
        ready()
    }
}

module.exports = main