/// <reference path="typings/ue.d.ts">/>

let UMG = require('UMG')

let viewport_widget = require('./lib/viewport-widget')

const font = {
    FontObject : GEngine.SmallFont,
    Size : 15
}

async function selector(defer,scenes) {    
    let elem = viewport_widget()
    defer(_ => elem.destroy())
    
    function modal() {
        let widget
        return new Promise(resolve => {
            widget = elem.add_child(dialog(resolve))
        }).then(x => {
            elem.remove_child(widget)
            return x
        })
    }

    function dialog(resolve) {
        let design = UMG.div({},
            UMG(Border,{
                BrushColor:{A:0.4},
                Padding:{Left:20,Top:10,Right:20,Bottom:20}
            },
                UMG.span({},
                    UMG.text({},"Demo scenes"),
                    scenes.map(x => UMG(Button,{OnClicked:_ => resolve(x)},UMG.text({Font:font},x)))
                )
            )           
        )
        return design
    }

    return await modal()
}

module.exports = selector