import React from 'react';

import Page from '../Layouts/Page';

import './Landing.scss';


const Landing = React.createClass({
  render() {
    return (
      <Page includeTitle={false} title="Home">
        <div className="jumbotron">
          <h1>CS2</h1>
          <p>Computer Science 2</p>
          <p>This website contains the problem solving process for my CS2 class labs.</p>
        </div>
        <h3>All lab code can be found on <a href="https://github.com/pranked/cs2">GitHub</a></h3>
      </Page>
    );
  },
});

export default Landing;
