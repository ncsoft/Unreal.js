let _ = require('lodash')
let dynamic_binding_context = require('./lib/bindings')
let UMG = require('UMG')
let compile = x => require('uclass')()(global,x)

function training_monitor(bindings,classes) {
    function bind(target,key,fn) {
        return {$link:elem => {
            bindings[key] = data => elem["Set"+target](fn(data))
        }}
    }

    let brushAsset = new SlateBrushAsset
    class Activations extends JavascriptWidget {
        OnPaint(_context) {
            let context = PaintContext.C(_context)
            const b = 16
            const s = b + 4            
            function p(x,y) {
                return {X:x*s,Y:y*s}
            }
            function clamp(v) {
                return Math.max(0,Math.min(1,v))
            }
            if (!this.data) return
            let xs = _.max(this.data.map(l => l.length))            
            this.data.forEach((layer,y) => {
                let offset = (xs - layer.length) / 2
                layer.forEach((value,x) =>
                    context.DrawBox(
                        p(x+offset,y),
                        {X:b,Y:b},
                        brushAsset,
                        {R:clamp(1-value),G:clamp(value),A:clamp(Math.abs(value)*4)})
                )
            })
        }
    }       

    class Graph extends JavascriptWidget {
        ctor() {
            // exponential moving average of (max)
            this.ema = 1
        }
        OnPaint(context) {
            let max = _.max(this.data)
            this.ema = max = this.ema * 0.95 + max * 0.05
            const sx = 1
            const sy = 100            
            function p(x,y) {
                return {X:x*sx + sx,Y:-y/(max+1e-3)*sy + sy}
            }
            let py
            this.data.forEach((y,x) => {
                if (py != undefined) {
                    PaintContext.C(context).DrawLine(
                        p(x-1,py),
                        p(x,y),
                        {R:1,G:0.7,B:0,A:1},
                        true)
                }
                
                py = y
            })
        }
    } 

    function dt_dd(x,y) {
        return UMG(Border,{
            BrushColor:{A:0.2},
            Padding:{Top:8,Left:16,Bottom:8,Right:16},
            Slot:{Padding:{Top:2,Bottom:2}}},
            UMG.span({Slot:{Size:{SizeRule:'Fill'}}},
                UMG.text({Slot:{Size:{Value:0.2}}},x),            
                y
            )
        )
    }

    function ActivationView(key) {
        return UMG(SizeBox, { WidthOverride: 400, HeightOverride: 100 },
            UMG(Border,{BrushColor:{A:0.4}},
                UMG(compile(Activations), {
                    $link: elem => {
                        bindings[key] = data => elem.data = data
                    }
                })
            )                
        )
    }

    let design = UMG.div({},
        UMG.text({},"convnetjs"),
        dt_dd('Iteration', UMG.text(bind('Text', 'iter', iter => iter))),                
        dt_dd('Loss', UMG.text(bind('Text', 'loss', loss => loss.toFixed(3)))),
        dt_dd('Chart',
            UMG(SizeBox, { WidthOverride: 400, HeightOverride: 100 },
                UMG(Border,{BrushColor:{A:0.4}},
                    UMG(compile(Graph), {
                        $link: elem => {
                            let data = []
                            bindings.loss = sample => {
                                data.push(sample)
                                if (data.length > 400) {
                                    data.shift() 
                                }
                                elem.data = data
                            }
                        }
                    })
                )                
            )
        ),
        _.range(classes).map(index => dt_dd(`Activations ${index}`, ActivationView(`activations_${index}`)))
    )

    return design
}

module.exports = training_monitor