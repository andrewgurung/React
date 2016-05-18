var React = require('react');

// HTML Element
var element = React.DOM.h1({}, "Hello");

// React.render(what, where)
// React.DOM.h1(attributes, content)
React.render(element, document.body);
