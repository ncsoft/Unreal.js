/// <reference path="../typings/ue.d.ts">/>

let _ = require('lodash')
let instantiator = require('instantiator')
let UMG = require('UMG')
let delay = require('./lib/delay')
let viewport_widget = require('./lib/viewport-widget')

async function demo(defer) {    
    let elem = viewport_widget()
    defer(_ => elem.destroy())

    async function rest_texture(url) {
        return new Promise((resolve,reject) => {
            let job = AsyncTaskDownloadImage.DownloadImage(url)
            let texture = null
            job.OnSuccess = [resolve]
            job.OnFail = [reject]
        })
    }

    const url = "http://www.blogcdn.com/massively.joystiq.com/media/2013/03/ncsoft.jpg"
    const url2 = "https://d3h4ic4mid7cwj.cloudfront.net/wp-content/uploads/tencent_penguin.jpg"
    const font = {
        FontObject : GEngine.SmallFont,
        Size : 25
    }

    let texture = await rest_texture(url)
    let set_image
    async function set_url(url) {
        if (!set_image) {
            console.log('?',url)
            return
        }
        set_image(await rest_texture(url))
    }

    let editStyle = {
        Font: font,
        ColorAndOpacity: {
            SpecifiedColor: { R: 0.5, G: 0.8, B: 1, A: 1 },
            ColorUseRule: 'UseColor_Specified'
        }
    }

    let design = UMG.div({},
            UMG.text({},"demo4"),
            UMG(EditableText,{
                WidgetStyle:editStyle,
                HintText:'url',
                Text:url,
                OnTextChanged:text => {
                    set_url(text)
                }
            }),
            UMG(EditableText,{WidgetStyle:editStyle,Text:url2}),
            UMG.span({},
                UMG(SizeBox,{WidthOverride:256,HeightOverride:256},
                    UMG(UImage,{
                        $link:elem => set_image = texture => {
                            elem.Brush.ResourceObject = texture
                            elem.SetBrush(elem.Brush)
                        },
                        Brush:{
                            ImageSize:{X:256,Y:256},
                            ResourceObject:texture
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