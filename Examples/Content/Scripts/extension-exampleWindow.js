/// <reference path="typings/ue.d.ts" />
"use strict"

function main() {
    const UMG = require('UMG')
    let {EventEmitter} = require('events')
    
    let font = {
        Size:10,
        FontObject:Root.GetEngine().SmallFont
    }
     
    makeWindow("$window",
    {
        SizingRule:'AutoSized',  
        Title:'Hello Unreal.js' 
    })(finish => { 
        let E = new EventEmitter()
        return UMG.div({Size:{Rule:'Fill'}},
            UMG.text({},"Unreal.js"),
            UMG(SizeBox,{HeightOverride:100},
                UMG(ScrollBox,{
                    $link:elem => {                        
                        elem.alive = true
                        let remaining = 100
                        function tick() {
                            if (!elem.alive) return
                            if (remaining-- <= 0) return
                            
                            let item = Math.random()
                            elem.add_child(
                                UMG(Button,
                                {
                                    OnClicked:_ => E.emit('click',item)
                                },
                                    UMG.text({Font:font},`Random ${item}`))
                                )
                            setTimeout(tick,100)
                        }
                        tick()
                    },
                    $unlink:elem => {
                        elem.alive = false
                    }
                })                
            ),        
            UMG.div({ 
                $link:elem => {
                    elem.handler = payload => {
                        elem.add_child(UMG.text({Font:font},`clicked! ${payload}`))
                    }
                    E.on('click',elem.handler)
                },
                $unlink:elem => { 
                    E.removeListener('click',elem.handler)
                }
            }),
            [1,2,3].map(x => UMG.text({Font:font},`count ${x}`)),
            
            UMG(Spacer,{'Slot.Size.Rule' : 'Fill'}),
            UMG(Button, 
                {   
                    OnClicked: finish
                },
                UMG.text({Font:font},"Close this window!") 
            )
        )
    })
    
    return _ => 0         
}  
 
function makeWindow(key,opts) {
    const _ = require('lodash')
    const UMG = require('UMG')
    const I = require('instantiator')
     
    if (!global[key]) {
        let window
        let container
        let widget = I(
            UMG(JavascriptWindow,_.extend(
                {
                    $link:elem => window = elem
                },opts),
                UMG(SizeBox,{$link:elem => container = elem})           
            )  
        )
        widget.TakeWidget().AddWindow()       
         
        let prev
        function add(child) {
            if (prev) {
                container.remove_child(prev) 
            }
            prev = container.add_child(child(finish))
            process.nextTick(_ => window.BringToFront()) 
        }       
        
        global[key] = add 
         
        function finish() {
            if (window) {
                window.RequestDestroyWindow()
                window = null
                global[key] = null
            }
        }
    }
    
    return global[key] 
}

module.exports = function() {
    try {
        return main()
    } catch (e) {
        console.error(String(e),'got error')
        return _ => null
    }    
}