var React = require('react');
var { Link } = require('react-router');

const Main = React.createClass({
	render() {
		return (
			<div>
				<div className='main'>
					<div className='header'>
						<Link to='/'>Home</Link>
						<Link to='/about'>About</Link>
					</div>
					{this.props.children}
				</div>
			</div>
		);
	},
});

module.exports = Main;