var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const uclass = require('uclass')().bind(this, global);

const React = require('react');
const ReactUMG = require('react-umg');

let RemoteImage = require('./remote-image');

class RadarWidget extends JavascriptWidget {
    properties() {
        this.size /*int*/;
        this.speed /*float*/;
        this.padding /*int*/;
    }
    OnPaint(context) {
        let { size, speed, padding } = this;
        let r = size / 2;
        let t = $time;
        let dx = (r - padding) * Math.cos(t * speed);
        let dy = (r - padding) * Math.sin(t * speed);
        context.DrawLine({ X: r, Y: r }, { X: r + dx, Y: r + dy }, { G: 1, A: 1 }, true);
    }
}
let Radar_C = uclass(RadarWidget);
ReactUMG.Register('uRadar', Radar_C);

const font = {
    FontObject: GEngine.SmallFont,
    Size: 15
};

class Radar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { speed: 2 };
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'uSizeBox',
                { WidthOverride: this.props.size, HeightOverride: this.props.size },
                React.createElement(
                    'uOverlay',
                    null,
                    React.createElement(RemoteImage, {
                        width: this.props.size,
                        height: this.props.size,
                        url: 'http://opengameart.org/sites/default/files/Radar.png'
                    }),
                    React.createElement('uRadar', _extends({}, this.props, this.state, { padding: 12 }))
                )
            ),
            React.createElement(
                'span',
                null,
                React.createElement('text', { Font: font, Text: 'speed' }),
                React.createElement('uEditableTextBox', {
                    Slot: { Size: { SizeRule: 'Fill' } },
                    Text: this.state.speed.toString(),
                    OnTextChanged: value => parseFloat(value) > 0 && this.setState({ speed: parseFloat(value) }) })
            )
        );
    }
}

module.exports = Radar;