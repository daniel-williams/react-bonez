var React = require('react');
var { Link } = require('react-router');
var color = require('color');

require('./Main.less');

const Main = React.createClass({
	render() {
		return (
            <section id='main'>
                <div id='header'>
                    <ul className='nav'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
                <div id='content'>
                    {this.props.children}
                </div>
            </section>
		);
	},
});

module.exports = Main;