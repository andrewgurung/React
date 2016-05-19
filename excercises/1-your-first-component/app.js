var React = require('react');

// Object destructuring assignment
var { h1, div, li, ul } = React.DOM;

// HTML Element using React DOM functions
// Each element is actually written as: React.DOM.h1(attributes, content)
// These are all function calls with arguments returned as children of that element
var element = (
  div({},
    h1({}, "Hello"),
    ul({},
      li({}, "React"),
      li({}, "Angular")
    )
  )
);

// HTML Element using JSX expression
// Just another way to call functions
// More commonly used than React.DOM functions
var element2 = (
  <div>
    <h1>Hello</h1>
    <ul>
      <li>React</li>
      <li>Angular</li>
    </ul>
  </div>
);

// Create a composite component using `React.createClass` method
// This component uses `render` method to return UI element
var App = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello from Composite Component</h1>
        <ul>
          <li>React</li>
          <li>Angular</li>
        </ul>
      </div>
    );
  }
});

// React.render(what, where)
React.render(<App/>, document.body);
