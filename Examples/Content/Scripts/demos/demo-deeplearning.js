/// <reference path="../typings/ue.d.ts">/>

let _ = require('lodash')
let instantiator = require('instantiator')
let UMG = require('UMG')
let delay = require('./lib/delay')
let viewport_widget = require('./lib/viewport-widget')
let deeplearning_demo = require('./deeplearning-demo')

async function demo(defer) {
    let alive = true    
    let elem = viewport_widget()
    defer(_ => {
        alive = false
        elem.destroy()
    })    
    let inner = elem.add_child(
        UMG(Border,{
            BrushColor:{A:0.4},
            Padding:{Left:100,Top:100,Right:100}
        })
    )
    
    await deeplearning_demo(inner, _ => alive)
}



module.exports = demo