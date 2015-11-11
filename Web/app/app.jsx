require('./app.less');

var React = require('react');
var ReactDom = require('react-dom');
var { Router, Route, IndexRoute, NotFoundRoute, RouteHandler } = require('react-router');
var createBrowserHistory = require('history/lib/createBrowserHistory');

var Main = require('./Main.jsx');
var Home = require('./Home.jsx');
var About = require('./About.jsx');

var history = createBrowserHistory();
console.log(createBrowserHistory, history);



ReactDom.render((
	<Router history={history} >
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='about' component={About} />
		</Route>
	</Router>
), document.getElementById('app'));

