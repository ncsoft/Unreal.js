let UMG = require('UMG')
    
function GetPC() {
    return PlayerController.C(GWorld.GetAllActorsOfClass(PlayerController).OutActors[0])
}

function editor() {
    let source = `
    1 + 1
    `
    let elem
    function fire() {
        console.log(eval(elem.GetText()))
    }
    return UMG.div({'slot.size.size-rule': 'Fill'},
        UMG(Button,{OnClicked:_ => fire()},"RUN"),
        UMG(MultiLineEditableTextBox, {
            'slot.size.size-rule': 'Fill',
            WidgetStyle: {
                'font.font-object' : GEngine.SmallFont, 
                'font.size': 20 
            },
            Text: source,        
            $link: _elem => {
                elem = _elem
            },
            $unlink: _ => {
            }
        })
    )
}

function main() {
    let widget = null
    let PC = GetPC()

    // create a widget
    widget = GWorld.CreateWidget(JavascriptWidget, PC)
    widget.JavascriptContext = Context
    widget.bSupportsKeyboardFocus = true
    
    class TestWidget extends JavascriptWidget {
        OnPaint(context) {
            let start = {X:0,Y:0}
            let r = 300
            let t = (new Date() | 0) / 1000
            let end = {X:Math.cos(t)*r,Y:Math.sin(t)*r}
            PaintContext.C(context).DrawLine(start,end,{R:1,A:1},true)                    
        }
    }
    
    let TestWidget_C = require('uclass')()(global,TestWidget)
    
    global.x = new TestWidget_C()
    const _= require('lodash')
    
    let onMessage = null
    let menu
    class MyOutput extends JavascriptOutputDevice {
        OnMessage(msg, verbosity, category) {
            onMessage && onMessage(msg,verbosity,category)
        }
    } 
    
    let MyOutput_C = require('uclass')()(global,MyOutput)
    let myOutput = new MyOutput_C
    
    let history = []
    function addHistoryEntry(entry) {
        history.push(entry)
    }
    
    function setSuggestions(elements, is_history) {
        if (menu) {
            console.log('sug')
            menu.Open(true)
        }
        console.log('?')
    }
    
    let selectedSuggestion = -1
    let suggestions = []
    function markActiveSuggestion() {
        
    }
    
    class MyConsole extends JavascriptWidget {
        AddChild(x) {
            console.log('add child')
            this.SetRootWidget(x)
            return {}
        }
        RemoveChild(x) {
            this.SetRootWidget(null)
        }
        OnPreviewKeyDown(geom,key) {
            let K = KeyEvent.C(key).GetKey().KeyName
            if (menu.IsOpen()) {
                if (K == 'Up' || K == 'Down') {
                    if (K == 'Up') {
                        if (selectedSuggestion < 0) {
                            selectedSuggestion = suggestions.length - 1    
                        } else {
                            selectedSuggestion--
                        }                            
                    } else if (K == 'Down') {
                        if (selectedSuggestion < suggestions.length - 1) {
                            ++selectedSuggestion
                        } else {
                            selectedSuggestion = -1
                        }
                    }
                    markActiveSuggestion()
                    return EventReply.Handled()
                } else if (K == 'Tab') {
                    if (suggestions.length) {
                        if (selectedSuggestion >= 0 && selectedSuggestion < suggestions.length) {
                            markActiveSuggestion()
                            //COMMIT
                        } else {
                            selectedSuggestion = 0
                            markActiveSuggestion()
                        }
                    }                        
                    return EventReply.Handled()
                }
            }
            if (K == 'Up') {
                setSuggestions(history,true)
                if (suggestions.length) {
                    selectedSuggestion = suggestions.length - 1
                    markActiveSuggestion()
                }
                return EventReply.Handled()
            }
            return EventReply.Unhandled()
        }
    }
    
    let MyConsole_C = require('uclass')()(global,MyConsole)       
    

    // low-level json which describes UMG structure to set up.
    let design = UMG.span({},
        UMG(MyConsole_C,{'slot.size.size-rule':'Fill'},
            UMG.div({},
                UMG(JavascriptMultiLineEditableTextBox, {
                    'slot.size.size-rule':'Fill',
                    AlwaysShowScrollbars:true, 
                    IsReadOnly:true,
                    $link:elem =>{
                        let layout
                        let style = TextBlockStyle({
                            Font:{
                                FontObject : GEngine.SmallFont,
                                Size:20
                            },
                            ColorAndOpacity:{
                                SpecifiedColor:{R:1,G:1,B:1,A:1} 
                            }
                        })
                        let style2 = TextBlockStyle({
                            Font:{
                                FontObject : GEngine.SmallFont,
                                Size:20
                            },
                            ColorAndOpacity:{
                                SpecifiedColor:{R:1,G:1,B:1,A:0.5} 
                            }
                        })
                        elem.SetTextDelegate = (text,_layout) => {
                            layout = _layout             
                        }
                        let timer = null
                        let userScrolled = false
                        elem.OnVScrollBarUserScrolled = offset => {
                            userScrolled = (offset < 1 - 1e-5)                        
                        }
                        let lines = 0
                        onMessage = (msg,v,category) => {                        
                            let str = [category,msg].join(':')                        
                            let model = new JavascriptTextModel()
                            model.SetString(str)
                            
                            if (!layout) return
                            layout.AddLine(model,[
                                model.CreateRun(style2,0,category.length),
                                model.CreateRun(style,category.length,str.length)
                                ])
                                
                            lines++
                            if (!userScrolled) {
                                elem.ScrollTo(lines-1)
                            }
                        }  
                        process.nextTick(_ => {
                            console.log('welcome UMG'); 
                            console.log("here you are")
                        })
                    },
                    $unlink: _ => {
                        onMessage = null
                    }
                }),
                UMG(MenuAnchor,
                    {
                        $link:elem => {
                            menu = elem
                            elem.OnGetMenuContentEvent = _ => {
                                return instantiator(
                                    UMG(Border,{BrushColor:{R:0.2,A:0.2}},
                                        UMG(JavascriptListView,{
                                            OnGenerateRowEvent:(row) => {
                                                return instantiator(
                                                    UMG.text({},"ROW!")
                                                )
                                            },
                                            $link:elem => {
                                                elem.JavascriptContext = Context
                                                elem.proxy = {}
                                                elem.proxy.OnSelectionChanged = (row) => {
                                                    console.log('selection')
                                                }
                                                
                                                elem.Items = [GWorld,PC]
                                            }
                                        })
                                    )                                        
                                )
                            }
                        }
                    },
                    UMG(EditableTextBox,
                        {
                            WidgetStyle:{'font.size':20},
                            HintText:'Enter javascript command',
                            ClearKeyboardFocusOnCommit:false,
                            IsCaretMovedWhenGainFocus:false,
                            OnTextChanged:text => {                            
                            },
                            $link:elem => {
                                elem.OnTextCommitted = text => {
                                    addHistoryEntry(text)
                                    console.log(text)
                                    elem.SetText('')
                                    console.log(eval(text))
                                }
                            }
                        }
                    )
                )                    
            )
        ),
        UMG.div({'slot.size.size-rule':'Fill'},
            editor(),
            UMG(Button,{'slot.size.size-rule':'Fill'},UMG(TestWidget_C,{}))
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

    return function () {
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
    require('bootstrap')('helloUMG')
}
