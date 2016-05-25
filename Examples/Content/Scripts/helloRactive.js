/// <reference path="typings/ue.d.ts">/>
// ; typing info for auto-completion in Visual Studio Code
let UMG = require('UMG')
let instantiator = require('instantiator')
let _ = require('lodash')
let Ractive = require('ractive')

function GetPC() {
    return PlayerController.C(GWorld.GetAllActorsOfClass(PlayerController).OutActors[0])
}

(function (global) {
    "use strict"

    function dyn_wrap(ractive,prop,bindings,design) {            
        let elem
        let observe
        function update(value) {
            let bag = {}
            _.each(bindings,(v,k) => {
                bag[k] = _.get(v(value), prop)
            })
            elem.set_attrs(bag)
        }
        function listener(cur, prev, keyPath) {
            update(ractive.get())
        }
        function link() {
            observe = ractive.observe(prop, listener)                
        }
        function unlink() {
            observe.cancel()
        }           
        
        let old = design.$link
        design.$link = _elem => {
            elem = _elem
            old && old()        
            update(ractive)
            link()
        }
        let old_unlink = design.$unlink
        design.$unlink = _ => {
            old_unlink && old_unlink()
            unlink()
        }
        return design
    }
    
    function dyn_object(ractive, prop, fn) {
        let elem
        let observe
        let old = _.clone(ractive.get(prop))

        function update(data) {
            elem.remove_children()
            let widget = fn(data)
            if(widget) {
                elem.add_child(widget)            
            }
        }

        function listener(cur, prev, keyPath) {
            if(ractive.get(prop) != old) {
                update(ractive.get(prop))                
            }
            old = _.clone(ractive.get(prop))
        }                           
        function link(_elem) {
            elem = _elem   
            update(ractive.get(prop))
            observe = ractive.observe(prop, listener)                      
        }
        function unlink() {
            observe.cancel()
        }
        return UMG.div({$link:link,$unlink:unlink})
        
    }
    
    function dyn_array(ractive,array,prop,fn) {
        let elem
        let observe
        let map = new Map()

        let old = [...ractive.get(array)]
        function add(added) {
            added.forEach(x => {
                let data = _.get(x, prop)
                map.set(data,elem.add_child(fn(data)))
            })
        }
        function remove(removed) {
            removed.forEach(x => {
                let data = _.get(x, prop)
                elem.remove_child(map.get(data))
                map.delete(x)
            })
        }
        function listener(cur, prev, keyPath) {
            let added = _.difference(ractive.get(array),old)
            let removed = _.difference(old,ractive.get(array))
            old = [...ractive.get(array)]
            add(added)
            remove(removed)
        }                           
        function link(_elem) {
            elem = _elem                
            add(ractive.get(array))
            observe = ractive.observe(array, listener)                      
        }
        function unlink() {
            observe.cancel()
        }
        return UMG.div({$link:link,$unlink:unlink})
    }


    function main() {
        let content = {hello: 'hello'}
        let people =  [
            {name: 'Rich Harris'},
            {name: 'Marty Nelson'}
        ]
        let obj = { a: { b: { c: 1 } } };

        let ractive = new Ractive({
            data : {
                content: content,
                people: people,
                obj : obj
            }})
            
        let PC = GetPC()

        let design = UMG.div({},
            dyn_object(ractive, 'content.hello', x => {
                return UMG.text({}, `${x}`)
            }),
            dyn_array(ractive, 'people', 'name', x => {
                return UMG.text({}, `${x}`)
            }, UMG.span({})),
            dyn_wrap(ractive, 'obj.a.b.c', {Text:x => x}, UMG.text({}, ""))
        )
        let i = 0
        let j = 100
        
        function tick() {
            people.push({name: `h ${i++}`})
            people.splice(0, 1)
            obj.a.b.c = `${j--}`
            content.hello += `${i}`
            ractive.update('content.hello')
            ractive.update('obj.a.b.c')
            setTimeout(__ => tick(), 1000)
        }
        setTimeout(__ => tick(), 1000)

        let page = instantiator(design)

        let widget = GWorld.CreateWidget(JavascriptWidget, PC)
        
        widget.SetRootWidget(page)
        widget.AddToViewport()

        // clean up the mess
        return function () {
            widget.RemoveFromViewport()
        }
    }

    // bootstrap to initiate live-reloading dev env.
    try {
        module.exports = () => {
            let cleanup = null

            // wait for map to be loaded.
            process.nextTick(() => cleanup = main());

            // live-reloadable function should return its cleanup function
            return () => cleanup()
        }
    }
    catch (e) {
        require('bootstrap')('helloRactive')
    }
})(this)
