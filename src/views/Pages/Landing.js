import React from 'react';

import Page from '../Layouts/Page';

import './Landing.scss';


const Landing = React.createClass({
  render() {
    return (
      <Page includeTitle={false} title="Home">
        <div className="jumbotron">
          <h1>CS2</h1>
          <p>Welcome</p>
          <p>Not much here :(</p>
        </div>
      </Page>
    );
  },
});

export default Landing;
