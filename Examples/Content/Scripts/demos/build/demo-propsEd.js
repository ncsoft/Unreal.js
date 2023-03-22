const ReactUMG = require('react-umg');
const React = require('react');

module.exports = function PropsDesign(E) {
    const SmallFont = { FontObject: Root.GetEngine().SmallFont, Size: 12 };

    class PropsEditor extends React.Component {
        componentDidMount() {
            this.onChoose = this.onChoose.bind(this);
            E.addListener('choose', this.onChoose);
        }
        componentWillUnmount() {
            E.removeListener('choose', this.onChoose);
        }

        onChoose(objects) {
            this.objects = objects;
            let propsEd = this.PropsEd.ueobj;
            if (propsEd) {
                propsEd.SetObjects(this.objects);
            }
        }

        onChange(t) {
            E.emit('updateData', this.objects);
        }

        render() {
            return React.createElement(
                'div',
                null,
                React.createElement('uPropertyEditor', { ref: ref => this.PropsEd = ref,
                    OnChange: t => this.onChange(t),
                    Slot: { Size: { SizeRule: ESlateSizeRule.Fill } } })
            );
        }
    }

    return ReactUMG.wrap(React.createElement(PropsEditor, null));
};