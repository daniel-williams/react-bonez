var React = require('react');
var { render } = require('react-dom');
var { Router } = require('react-router');

var history = require('./history.js');
var routes = require('./routes.jsx');

render(
    <Router history={history} routes={routes} />,
    document.getElementById('app')
);

