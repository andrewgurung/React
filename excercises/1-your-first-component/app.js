var React = require('react');

// Object destructuring assignment
var { h1 } = React.DOM;

// HTML Element
var element = h1({}, "Hello");

// React.render(what, where)
// React.DOM.h1(attributes, content)
React.render(element, document.body);
