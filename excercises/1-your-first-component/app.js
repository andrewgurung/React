var React = require('react');

// Object destructuring assignment
var { h1, div, li, ul } = React.DOM;

// HTML Element
// Nested HTML element using React DOM
// Each element is actually written as:
// React.DOM.h1(attributes, content)
var element = div({},
                  h1({}, "Hello"),
                  ul({},
                    li({}, "React"),
                    li({}, "Angular")
                  )
              );

// React.render(what, where)
React.render(element, document.body);
