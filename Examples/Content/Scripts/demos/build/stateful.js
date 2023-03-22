const React = require('react');
let _ = require('lodash');
const { palette } = require('google-material-color');
const { hex2lc } = require('./lib/utils');

const font = {
    FontObject: GEngine.SmallFont,
    Size: 15
};

class ListItem extends React.Component {
    render() {
        if (this.props.removed) return React.createElement(
            'span',
            null,
            React.createElement('text', { Text: 'removed item', Font: font })
        );
        return React.createElement(
            'span',
            null,
            React.createElement('text', {
                Slot: { Size: { SizeRule: 'Fill' } },
                Text: 'item_' + this.props.data,
                Font: font
            }),
            React.createElement(
                'uButton',
                {
                    OnClicked: this.props.remove
                },
                React.createElement('text', { Text: 'Delete', Font: font })
            )
        );
    }
}

class Stateful extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { count: 50, color: hex2lc(palette.Pink.A200), removed: [] };
    }

    OnTextChanged(value) {
        this.setState({ count: parseInt(value) || 0 });
    }

    onClicked() {
        this.setState({ color: hex2lc(_.shuffle(_.values(palette.Pink))[0]) });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement('uButton', {
                BackgroundColor: this.state.color,
                OnClicked: this.onClicked.bind(this) }),
            React.createElement('uEditableTextBox', {
                Text: this.state.count,
                OnTextChanged: value => this.OnTextChanged(value) }),
            React.createElement('text', { Text: 'item-count: ' + this.state.count, Font: font }),
            React.createElement(
                'uSizeBox',
                { HeightOverride: 400 },
                React.createElement(
                    'uScrollBox',
                    null,
                    _.times(this.state.count, i => React.createElement(ListItem, {
                        key: i,
                        data: i,
                        removed: this.state.removed.indexOf(i) >= 0,
                        remove: () => {
                            this.setState({ removed: [...this.state.removed, i] });
                        }
                    }))
                )
            )
        );
    }
}

module.exports = Stateful;