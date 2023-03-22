/// <reference path="../typings/ue.d.ts">/>

let UMG = require('UMG')
let viewport_widget = require('./lib/viewport-widget')
let rest_texture = require('./lib/remote-texture')

async function demo(defer) {    
    let elem = viewport_widget()
    defer(_ => elem.destroy())

    const url = 'https://github.com/ncsoft/Unreal.js-core/raw/master/Resources/Icon128.png'
    const font = {
        FontObject : GEngine.SmallFont,
        Size : 25
    }

    let texture
    let set_image
    async function set_url(imageUrl) {
        if (!set_image) {
            console.error('?',imageUrl)
            return
        }
        set_image(await rest_texture(imageUrl))
    }

    let editStyle = {
        Font: font,
        ColorAndOpacity: {
            SpecifiedColor: { R: 0.5, G: 0.8, B: 1, A: 1 },
            ColorUseRule: 'UseColor_Specified'
        }
    }

    let design = UMG.div({},
            UMG.text({},"Input url to show image :"),
            UMG(EditableText,{
                WidgetStyle:editStyle,
                HintText:'Url to show image',
                Text:url,
                OnTextChanged:text => {
                    set_url(text)
                }
            }),
            UMG.span({},
                UMG(SizeBox,{WidthOverride:256,HeightOverride:256},
                    UMG(UImage,{
                        $link:elem => set_image = texture => {
                            elem.SetBrushFromTexture(texture, false)
                        }
                    })
                )
            )
        )
    elem.add_child(
        UMG(Border,{
            BrushColor:{A:0.4},
            Padding:{Left:100,Top:100,Right:100}
        }, design)
    )
}

module.exports = demo