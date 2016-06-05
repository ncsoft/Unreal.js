/// <reference path="typings/ue.d.ts" />
"use strict"

function main() {
    const UMG = require('UMG')
    let {EventEmitter} = require('events')
    
    let font = {
        Size:10,
        FontObject:Root.GetEngine().SmallFont
    }
    
    const request = require('request')
    const style = new JavascriptStyleSet
    style.StyleSetName = 'EditorStyle'
     
    makeWindow("$window",
    {
        SizingRule:'AutoSized',  
        Title:'Hello Unreal.js' 
    })(finish => { 
        let E = new EventEmitter()
        return UMG(SizeBox,{WidthOverride:400},            
            UMG.div({Size:{Rule:'Fill'}},
                UMG.span({},
                    UMG.text({},"Unreal.js"),
                    UMG.text({
                        Font:font,
                        'Slot.Size.Rule':'Fill',                    
                        'Slot.HorizontalAlignment':'HAlign_Right',
                        'Slot.VerticalAlignment':'VAlign_Center',
                        $link:elem => {
                            elem.alive = true
                            request('GET','https://api.github.com/repos/ncsoft/Unreal.js').then(json => {
                                const {stargazers_count} = json
                                elem.SetText(`${stargazers_count} stars`)
                            })
                        },
                        $unlink:elem => {
                            elem.alive = false
                        }
                    })
                ),            
                UMG.text({AutoWrapText:true,Font:font},
`Unreal.js is a plug-in which brings V8-powered Javascript into UnrealEngine4.
${_.filter(_.keys(global),x=>!!global[x].StaticClass).length} classes exported`
                ),
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
                                        WidgetStyle: style.GetButtonStyle("HoverHintOnly"),
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
                        WidgetStyle: style.GetButtonStyle("Credits.Button"),
                        OnClicked: _ => {
                            JavascriptProcess.LaunchURL("https://github.com/ncsoft/Unreal.js")
                        }
                    },
                    UMG.text({Font:font},"Visit project page")
                ),
                UMG(Button, 
                    {   
                        WidgetStyle: style.GetButtonStyle("FlatButton.Dark"),
                        OnClicked: finish
                    },
                    UMG.text({Font:font},"Close this window!") 
                )
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
        let bye
        let alive = true
        process.nextTick(_ => {
            if (!alive) return
            bye = main()
        })
        return _ => {
            alive = false
            if (bye) bye()
        }
    } catch (e) {
        console.error(String(e),'got error')
        return _ => null
    }    
}
