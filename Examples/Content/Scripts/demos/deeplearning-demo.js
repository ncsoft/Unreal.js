let _ = require('lodash')
let npm = require('./lib/npm')
let dynamic_binding_context = require('./lib/bindings')
let instantiator = require('instantiator')
let UMG = require('UMG')
let delay = require('./lib/delay')
let localStorage = require('./lib/localStorage')
let training_monitor = require('./training-monitor')

async function deeplearning_demo(elem, check_health,neurons = [10,7,5,5]) {
    let {context,bindings} = dynamic_binding_context()

    let design = training_monitor(bindings,2)

    const path = 'deeplearning-demo-saved'

    function job(title,fn) {
        async function go() {
            context.status = title
            await delay(0)
            fn()
            await delay(0)
            context.status = title + '... Done'
        }
        return go
    }

    function bind(target,key,fn) {
        return {$link:elem => {
            bindings[key] = data => elem["Set"+target](fn(data))
        }}
    }

    function ActionButton(what,fn) {
        return UMG(Button,{
            Slot:{Size:{SizeRule:'Fill'}},
            OnClicked:job(what,fn)},
            what
        )
    }

    await npm('convnetjs')

    let network = require('./lib/network')

    const num_iter = 100000
    const batch_size = 64
    let net = network({
        batch_size:batch_size,
        learning_rate:0.01
    },2,2,...neurons)

    let widget = elem.add_child(
        UMG.div({},
            design,
            UMG.span({},
                ActionButton("Load pretrained network",_ => { 
                    const data = localStorage.get(path)
                    if (data) {
                        net.fromJSON(localStorage.get(path)) 
                    } else {
                        console.error('No pretrained network found. save one first.')
                    }
                }),
                ActionButton("Save trained network",_ => localStorage.set(path,net.toJSON()))
            ),
            UMG.text(bind('Text','status',x=>x))
        ))
    
    function f(x,y) {
        return x*x + y*y < 0.2 ? 0 : 1
    }
    
    for (var iter=1; iter<=num_iter; ++iter) {
        if (!check_health()) break
        let loss = 0
        let last_y
        for (var i=0; i<batch_size; ++i) {
            let x = [Math.random() - 0.5, Math.random() - 0.5]
            let y = f(...x)
            last_y = y            
            loss += net.train(x,y)
        }                
        loss = loss / batch_size
        context.iter = iter
        context.loss = loss
        context[`activations_${last_y}`] = net.activations()
        await delay(0)
    }

    elem.remove_child(widget)
}

module.exports = deeplearning_demo