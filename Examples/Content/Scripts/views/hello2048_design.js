function box_value(opts) {
    return {
      slot : {
        Padding : {Left:8,Right:8,Top:8,Bottom:8}
      },
      type : Border,
      attrs : {
        BrushColor : {R:0.5,G:0.5,B:0.2,A:0.2},
        Padding : {Left:8,Right:8,Top:8,Bottom:8}
      },
      children : [
        {
          type : VerticalBox,
          children : [
            {
              type : TextBlock,
              slot : { Size : { SizeRule : 'Fill' } },
              attrs : {
                Text : opts.label || '',
                Justification : 'Center'
              }
            },
            {
              id : opts.id,
              type : TextBlock,
              slot : { Size : { SizeRule : 'Fill' } },
              attrs : {
                Text : opts.value || '',
                Justification : 'Center'
              }
            }
          ]
        }
      ]
    }
    }

module.exports = {
    type : HorizontalBox,
    children : [
      {
        slot : {
          Padding : {Left:8, Right:8, Top:8, Bottom:8}
        },
        type : TextBlock,
        attrs : {
          Text : '2048',
          Font : {
            Size : 90
          }
        }
      },
      box_value({label:"Score",id:"score"}),
      box_value({label:"Best",id:"best"}),
      box_value({ label: "message", id: "message" }),
      {
          type: TextBlock,
          slot: { Size: { SizeRule: 'Fill' } },
          attrs: {
              Text: 'github.com/gabrielecirculli/2048',
              Justification: 'Right',
              Font: {
                  Size:40
              }
          }
      }
    ]
}
