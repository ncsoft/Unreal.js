const React = require('react')

const font = {
    FontObject: GEngine.SmallFont,
    Size: 15
}

class SimpleBinding extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = { text: "SimpleBinding" }
    }

    OnTextChanged(value) {
        this.setState({ text: value })
    }

    render() {
        return (
            <div>
                <uEditableTextBox
                    Text={this.state.text}
                    OnTextChanged={value => this.OnTextChanged(value)} />
                <text Text={this.state.text} Font={font}/>
            </div>
        )
    }
}

module.exports = SimpleBinding