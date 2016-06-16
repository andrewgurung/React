var React = require('react');
var md5 = require('MD5');

var GRAVATAR_URL = "http://gravatar.com/avatar";
var USERS = [
  { id: 1, name: 'Ryan Florence', email: 'rpflorencegmail.com' },
  { id: 2, name: 'Michael Jackson', email: 'mjijackson@gmail.com' }
];

var App = React.createClass({
  render () {
    var users = USERS.map((user) => {
      var size = 36;
      var hash = md5(user.email);
      var url = `${GRAVATAR_URL}/${hash}?s=${size*2}`;
      return (
        <li>
          <img src={url} width={size} /> {user.name}
        </li>
      );
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
