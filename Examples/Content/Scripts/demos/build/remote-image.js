const React = require('react');

let rest_texture = require('../lib/remote-texture');

class RemoteImage extends React.Component {
    componentDidMount() {
        async function go() {
            let texture = await rest_texture(this.props.url);
            if (this.done) return;

            let elem = this.refs.image.ueobj;
            elem.Brush.ResourceObject = texture;
            elem.SetVisibility('Visible');
        }
        go.call(this);
    }

    componentWillUnmount() {
        this.done = true;
    }

    render() {
        let { width, height } = this.props;
        return React.createElement(
            'uSizeBox',
            { WidthOverride: width, HeightOverride: height },
            React.createElement('img', { ref: 'image', Visibility: 'Hidden' })
        );
    }
}

module.exports = RemoteImage;