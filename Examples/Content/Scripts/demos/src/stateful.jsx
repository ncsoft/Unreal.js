const React = require('react')
let _ = require('lodash')
const {palette} = require('google-material-color')
const {hex2lc} = require('./lib/utils')

const font = {
    FontObject : GEngine.SmallFont,
    Size : 15
}

class ListItem extends React.Component {
    render() {
        if (this.props.removed) return (
            <span>
                <text Text={'removed item'} Font={font}/>
            </span>
        )
        return (
            <span>
                <text
                    Slot={{ Size: { SizeRule: 'Fill' } }}
                    Text={'item_' + this.props.data}
                    Font={font}
                    />
                <uButton
                    OnClicked={this.props.remove}
                    >
                    <text Text="Delete" Font={font}/>
                </uButton>
            </span>
        )
    }
}

class Stateful extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = { count: 50, color: hex2lc(palette.Pink.A200), removed: [] }
    }

    OnTextChanged(value) {
        this.setState({ count: parseInt(value) || 0 })
    }

    onClicked() {
        this.setState({ color: hex2lc(_.shuffle(_.values(palette.Pink))[0]) })
    }

    render() {
        return (
            <div>
                <uButton
                    BackgroundColor={this.state.color}
                    OnClicked={this.onClicked.bind(this)} />
                <uEditableTextBox
                    Text={this.state.count}
                    OnTextChanged={value => this.OnTextChanged(value)} />
                <text Text={'item-count: ' + this.state.count} Font={font}/>
                <uSizeBox HeightOverride={400}>
                    <uScrollBox>
                        {_.times(this.state.count, i => (
                            <ListItem
                                key={i}
                                data={i}
                                removed={this.state.removed.indexOf(i) >= 0}
                                remove={() => { this.setState({ removed: [...this.state.removed, i] }) } }
                                />
                        )
                        )}
                    </uScrollBox>
                </uSizeBox>
            </div>
        )
    }
}

module.exports = Stateful