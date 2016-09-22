import React from 'react';

import Page from '../Layouts/Page';
import Problems from '../Components/Problems';


export default class Lab3 extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      open: true,
    };
  }

  render() {
    return (
      <Page title="Lab 3" >
        <Problems src="/assets/lab3/problems.json" />
      </Page>
    );
  }
}
