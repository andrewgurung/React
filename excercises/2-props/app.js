var React = require('react');
var md5 = require('MD5');

var GRAVATAR_URL = "http://gravatar.com/avatar";

var USERS = [
  { id: 1, name: 'Ryan Florence', email: 'rpflorencegmail.com' },
  { id: 2, name: 'Michael Jackson', email: 'mjijackson@gmail.com' }
];

var Gravatar = React.createClass({
  propTypes: {
    email: React.PropTypes.string
  },

  render () {
    var size = 36;
    var hash = md5(this.props.email);
    var url = `${GRAVATAR_URL}/${hash}?s=${size*2}`;
    return <img src={url} width={size} />;
  }
})

var App = React.createClass({
  render () {
    var users = USERS.map((user) => {
      return <li><Gravatar email={user.email}/> {user.name}</li>
    });
    return (
      <div>
        <h1>Users</h1>
        <ul>{users}</ul>
      </div>
    );
  }
});

React.render(<App/>, document.body);
