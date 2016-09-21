import React from 'react';

const NotFound = React.createClass({
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>404</h1>
          <p>That's an error!</p>
          <p>We coudln't find whatever you were looking for :(</p>
        </div>
      </div>
    );
  },
});

export default NotFound;
