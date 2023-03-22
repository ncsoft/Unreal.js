const React = require('react');

const font = {
    FontObject: GEngine.SmallFont,
    Size: 15
};

class Timer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { count: 1 };
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 50);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    tick() {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return React.createElement('text', {
            Text: new Date().toISOString(),
            Font: font });
    }
}

module.exports = Timer;