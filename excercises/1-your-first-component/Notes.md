## JSX vs. Pure JavaScript

```js
var React = require('react');

// Object destructuring assignment
var { h1, div, li, ul } = React.DOM;

// 1. Pure JavaScript
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

// 2. JSX
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

// React.render(what, where)
React.render(element2, document.body);
```
------------------------------------------

## Composite Components
- Create a composite component using `React.createClass` method
- This component uses `render` method to return UI element
- Can be used as a component or as a function call

```js
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
// Used as a Composite Component
React.render(<App/>, document.body);

// Used as a function call (Discouraged. Throws a warning)
React.render(App(), document.body);
```

Ways of using composite component as function call
```js
// 1. Using createElement()
React.render(React.createElement(App,{}), document.body);

// 2. Using Factory method
App = React.createFactory(App);
React.render(App(), document.body);
```
