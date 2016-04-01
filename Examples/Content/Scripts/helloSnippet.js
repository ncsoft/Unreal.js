const UMG = require('UMG')
const _ = require('lodash')
const request = require('request')
const fontSize = 12

function textStyle(color) {
    return TextBlockStyle({
        Font: { FontObject:GEngine.SmallFont, Size: fontSize },
        ColorAndOpacity: {
            SpecifiedColor: color
        }
    })
}

function GetPC() {    
    return World.C(GWorld).GetPlayerController(0)
}

function editor() {
    let source = ''
    let actors = GWorld.GetAllActorsOfClass(Actor).OutActors
    let elem
    function fire() {
        _.difference(GWorld.GetAllActorsOfClass(Actor).OutActors, actors).forEach(actor => actor.DestroyActor())
        console.log(eval(`(function (){${elem.GetText()}})()`))
    }

    class MyEditor extends JavascriptWidget {
        AddChild(x) {
            this.SetRootWidget(x)
            return {}
        }
        RemoveChild(x) {
            this.SetRootWidget(null)
        }
        OnPreviewKeyDown(geom, key) {
            let K = KeyEvent.C(key).GetKey().KeyName
            if (K == 'F5') {
                fire()
            }
            return EventReply.Unhandled()
        }
    }

    let MyEditor_C = require('uclass')()(global, MyEditor)
    
    let gist = ''
    
    function load(id) {
        gist = id
        
        request('GET',`https://gist.githubusercontent.com/${id}/raw`,{res:'string'}).then(str => {
            elem.SetText(str)
            fire()
        }).catch(e => {
            console.error(String(e))
        })
    }
    
    load('nakosung/2466994e78e887d19c2b')

    return UMG(MyEditor_C, { 'slot.size.size-rule': 'Fill' },
        UMG.div({ 'slot.size.size-rule': 'Fill' },
            UMG.span({},
                UMG(EditableTextBox,{
                    'slot.size.size-rule': 'Fill',
                    WidgetStyle:{
                        'font.size':fontSize,
                        'font.font-object': GEngine.SmallFont,
                    },
                    Text:gist,
                    HintText:'Gist id',
                    OnTextCommitted:text => {
                        if (text != gist) {
                            load(text)
                        }
                    }
                }),
                UMG(Button, { OnClicked: _ => fire() }, 
                    UMG.text({
                        'font.size':fontSize * 1.5,
                        'font.font-object': GEngine.SmallFont,
                    },"RUN (F5)")
                )
            ),
            UMG(MultiLineEditableTextBox, {
                'slot.size.size-rule': 'Fill',
                WidgetStyle: { 'font.size': fontSize },
                Text: source,
                $link: _elem => {
                    elem = _elem
                },
                $unlink: _ => {
                }
            })
        )
    )
}


function logWindow() {
    return UMG(JavascriptMultiLineEditableTextBox, {
        'slot.size.size-rule': 'Fill',
        AlwaysShowScrollbars: true,
        IsReadOnly: true,
        $link: elem => {
            let layout
            let style = textStyle({ R: 1, G: 1, B: 1, A: 1 })
            let style2 = textStyle({ R: 1, G: 1, B: 1, A: 0.5 })
            elem.SetTextDelegate = (text, _layout) => {
                layout = _layout
            }
            let timer = null
            let userScrolled = false
            elem.OnVScrollBarUserScrolled = offset => {
                userScrolled = (offset < 1 - 1e-5)
            }
            let lines = 0
            let onMessage = (msg, v, category) => {
                let str = [category, msg].join(':')
                let model = new JavascriptTextModel()
                model.SetString(str)

                if (!layout) return
                layout.AddLine(model, [
                    model.CreateRun(style2, 0, category.length),
                    model.CreateRun(style, category.length, str.length)
                ])

                lines++
                if (!userScrolled) {
                    elem.ScrollTo(lines - 1)
                }
            }
            
            class MyOutput extends JavascriptOutputDevice {
                OnMessage(msg, verbosity, category) {
                    onMessage && onMessage(msg, verbosity, category)
                }
            }

            let MyOutput_C = require('uclass')()(global, MyOutput)
            elem.myOutput = new MyOutput_C
        },
        $unlink: elem => {
            elem.myOutput.Kill()
            elem.myOutput = null
        }
    })
}

function main() {
    let widget = null
    let PC = GetPC()

    // create a widget
    widget = GWorld.CreateWidget(JavascriptWidget, PC)
    widget.JavascriptContext = Context
    widget.bSupportsKeyboardFocus = true

    let design = UMG.span({},
        UMG.div({'slot.size.value':0.5}),
        UMG.div({'slot.size.value':0.5},
            editor(),
            logWindow()
        )
    )

    let instantiator = require('instantiator')
    let page = instantiator(design)

    page.Visibility = 'Visible'

    widget.SetRootWidget(page)
    widget.AddToViewport()

    // Switch PC to UI only mode.
    PC.bShowMouseCursor = true
    PC.SetInputMode_UIOnly(page)

    return function() {
        onMessage = null
        myOutput = null
        widget.RemoveFromViewport()
    }
}

try {
    module.exports = () => {
        let cleanup = null
        process.nextTick(() => cleanup = main());
        return () => cleanup()
    }
}
catch (e) {
    require('bootstrap')('helloSnippet')
}