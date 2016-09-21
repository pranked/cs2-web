import React from 'react';

import Page from '../Layouts/Page';
import Analysis from '../Components/Analysis';


export default class Problem1 extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      open: true,
    };
  }
  render() {
    return (
      <Page title="Lab 2" >
        <Analysis problem="/assets/lab2/problem2.json" />
        <Analysis problem="/assets/lab2/problem2.json" />
      </Page>
    );
  }
}
