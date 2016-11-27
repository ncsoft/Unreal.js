/// <reference path="../typings/ue.d.ts">/>

let delay = require('./lib/delay')

const path_mtrl = '/Game/StarterContent/Materials/M_Metal_Burnished_Steel.M_Metal_Burnished_Steel'

async function demo(defer) {
    const N = 10
    let grid_len = 80
    let cable_len = grid_len * 1.05
    const interval = 20
    const mtrl = Material.Load(path_mtrl)
    if (!mtrl) {
        console.error("This demo requires start content.")
        return
    }

    let alive = true
    let actors = []
    defer(_ => {
        alive = false
        actors.forEach(x => x.DestroyActor())
    })

    function cable(a,b,l) {
        if (!alive) throw new Error("Interrupted")
        let c = new CableActor(GWorld,a)
        c.CableComponent.SetMaterial(0, mtrl)
        c.CableComponent.CableLength = l
        c.CableComponent.EndLocation = Vector.C(b).Subtract_VectorVector(a)
        actors.push(c)
    }

    function p(x,y) {
        return {X:(x-N/2)*grid_len, Y:(y-N/2)*grid_len, Z:100}
    }

    // Note that this code runs like an event graph
    for (let x=0; x<=N; ++x) {
        for (let y=0; y<=N; ++y) {

            // horz
            if (x<N) {
                cable(p(x, y), p(x + 1, y), cable_len)
            }
            
            // delay
            await delay(interval)

            // vert
            if (y<N) {
                cable(p(x, y), p(x, y + 1), cable_len)
            }
            
            // delay
            await delay(interval)
        }
    }
}

module.exports = demo