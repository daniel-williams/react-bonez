var React = require('react');
var { Route, DefaultRoute, NotFoundRoute, RouteHandler } = require('react-router');

var Main = require('./Main.jsx');
var Home = require('./Home.jsx');
var About = require('./About.jsx');

var routes = (
      <Route path="/" component={Main}>
            <DefaultRoute component={Home} />
            <Route path="aobut" component={About} />
      </Route>
);

module.exports = routes;