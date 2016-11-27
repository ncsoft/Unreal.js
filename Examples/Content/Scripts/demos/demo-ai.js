/// <reference path="../typings/ue.d.ts">/>

let mixamo = require('./dummy-ai')
let _ = require('lodash')

function destroy_actors(type,...rest) {
    GWorld.GetAllActorsOfClass(type).OutActors.forEach(x => x.DestroyActor())
    if (rest.length) {
        destroy_actors(...rest)
    }
}

async function demo(defer) {
    defer(_ => destroy_actors(Character,AIController))
    await Promise.all(_.range(2).map(mixamo))
}

module.exports = demo