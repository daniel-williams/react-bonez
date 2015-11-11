var React = require('react');
var Radium = require('radium');
var color = require('color');

const About = React.createClass({

    getInitialState() {
        return {
            isOn: false,
        };
    },
	render() {
        var mystyle = [styles.base, styles[this.state.isOn ? 'on' : 'off']];
		return (
			<h1 style={mystyle} onClick={this.handleClick}>About</h1>
		);
	},
    handleClick() {
        this.setState({
            isOn: !this.state.isOn,
        });
    },
});

var styles = {
    base: {
        color: '#000',
        background: '#0074D9',
        ':hover': {
            background: color('#0074d9').lighten(0.2).hexString(),
        },
    },
    on: {
        border: '1px solid #000',
    },
    off: {
    },
};

module.exports = Radium(About);