/// <reference path="../../typings/ue.d.ts">/>

const uclass = require('uclass')().bind(this, global);

const React = require('react');
const ReactUMG = require('react-umg');
const events = require('events');
const _ = require('lodash');

let context = {
    mygeom: null,
    sprite: null
};

const smallFont = {
    FontObject: GEngine.SmallFont,
    Size: 12
};

let RemoteImage = require('./remote-image');

let { ltrb } = require('../lib/utils');

class DragOp extends DragDropOperation {
    Dragged(event) {
        let pos = UPointerEvent.C(event).GetScreenSpacePosition();
        pos = Geometry.C(context.mygeom).AbsoluteToLocal(pos);
        context.sprite.Slot.SetPosition(pos);
        context.E.emit('dragged', event);
    }
    Drop(event) {
        context.sprite.SetVisibility('Hidden');
        context.E.emit('drop', event);
    }
    DragCancelled(event) {
        context.sprite.SetVisibility('Hidden');
        context.E.emit('cancel', event);
    }
}

class MyDraggable extends JavascriptWidget {
    properties() {
        this.DragId /*int*/;
    }
    OnDragDetected() {
        let op = WidgetBlueprintLibrary.CreateDragDropOperation(DragOp_C);
        context.E.emit('detected', this.DragId);
        context.sprite.SetVisibility('Visible');
        return {
            $: EventReply.Handled(),
            Operation: op
        };
    }
    OnMouseButtonDown(geom, event) {
        context.mygeom = geom;
        return event.DetectDragIfPressed(this, { KeyName: 'LeftMouseButton' });
    }
}

class MyDropTarget extends JavascriptWidget {
    properties() {
        this.DragId /*int*/;
    }
    OnDrop(x) {
        context.E.emit('dropped', this.DragId, x);
        return EventReply.Handled();
    }
    OnDragEnter(geom, event) {
        context.E.emit('enter', this.DragId, geom, event);
    }
    OnDragLeave(event) {
        context.E.emit('leave', this.DragId, event);
    }
}

let DragOp_C = uclass(DragOp);
let MyDraggable_C = uclass(MyDraggable);
let MyDropTarget_C = uclass(MyDropTarget);
ReactUMG.Register('uDraggable', MyDraggable_C);
ReactUMG.Register('uDropTarget', MyDropTarget_C);

class Item extends React.Component {
    render() {
        const urls = ["https://d1u1mce87gyfbn.cloudfront.net/game/unlocks/0x0250000000000657.png", "https://blzgdapipro-a.akamaihd.net/game/unlocks/0x02500000000005CD.png"];
        const descs = ["Green", "Blue"];
        const { id } = this.props;
        const index = (id || 0) % urls.length;
        const url = urls[index];
        const desc = descs[index];
        return React.createElement(
            'uBorder',
            {
                BrushColor: { A: 0.2 },
                Padding: ltrb(1),
                ContentColorAndOpacity: this.props.dimmed ? { R: 1, G: 1, B: 1, A: 0.5 } : { R: 1, G: 1, B: 1, A: 1 }
            },
            React.createElement(
                'div',
                null,
                React.createElement(RemoteImage, {
                    width: 64,
                    height: 64,
                    url: url }),
                React.createElement('text', {
                    Font: smallFont,
                    Justification: 'Center',
                    Text: desc })
            )
        );
    }
}

class DragAndDrop extends React.Component {
    constructor(props, ctx) {
        super(props, ctx);
        this.state = {
            dragging: null,
            count: [0, 0, 0]
        };
    }

    componentDidMount() {
        context.sprite = this.refs.sprite.ueobj;
        let E = context.E = new events.EventEmitter();
        E.on('drop', () => {
            this.setState({ dragging: null, focus: null });
        });
        E.on('cancel', () => {
            this.setState({ dragging: null, focus: null });
        });
        E.on('dropped', x => {
            let c = this.state.count;
            c[x] = c[x] + 1;
            this.setState({ count: c });
        });
        E.on('detected', x => {
            this.setState({ dragging: x });
        });
        E.on('enter', x => {
            this.setState({ focus: x });
        });
        E.on('leave', x => {
            if (this.state.focus == x) {
                this.setState({ focus: null });
            }
        });
    }

    componentWillUnmount() {
        context.sprite = null;
        context.E = null;
    }

    render() {
        let { Font } = this.props;
        return React.createElement(
            'uOverlay',
            { Slot: { VerticalAlignment: 'VAlign_Fill', Size: { Rule: 'Fill' } } },
            React.createElement(
                'div',
                { Slot: { HorizontalAlignment: 'HAlign_Fill' } },
                React.createElement(
                    'span',
                    null,
                    [1, 2].map(id => React.createElement(
                        'uDraggable',
                        { key: id, DragId: id },
                        React.createElement(Item, { id: id, dimmed: this.state.dragging == id })
                    ))
                ),
                [1, 2].map(id => React.createElement(
                    'uDropTarget',
                    { key: id, DragId: id },
                    React.createElement(
                        'uBorder',
                        { BrushColor: { R: 1, A: this.state.focus == id ? 0.5 : 0.2 } },
                        React.createElement('text', {
                            Text: this.state.dragging ? "Drop HERE!" : `Drop target #${id} ${this.state.count[id]}`,
                            Font: Font
                        })
                    )
                ))
            ),
            React.createElement(
                'uCanvasPanel',
                {
                    Visibility: 'HitTestInvisible',
                    ref: 'panel',
                    Slot: {
                        HorizontalAlignment: 'HAlign_Fill',
                        VerticalAlignment: 'VAlign_Fill'
                    } },
                React.createElement(
                    'uBorder',
                    {
                        ref: 'sprite',
                        Visibility: 'Hidden',
                        Padding: ltrb(0),
                        Slot: { Size: { X: 64, Y: 64 + 18 } }
                    },
                    _.compact([this.state.dragging]).map(id => React.createElement(Item, { key: id, id: id }))
                )
            )
        );
    }
}

module.exports = DragAndDrop;