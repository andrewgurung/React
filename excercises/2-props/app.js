var React = require('react');

var Gravatar = React.createClass({
  render () {
    return <span>Email: {this.props.email}</span>;
  }
});

React.render(<Gravatar email="andrew@gmail.com"/>, document.body);
