var React = require('react');
var { Route, IndexRoute } = require('react-router');

var Main = require('./Main.jsx');
var Home = require('./Home.jsx');
var About = require('./About.jsx');

module.exports = (
    <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path='about' component={About} />
    </Route>
);
