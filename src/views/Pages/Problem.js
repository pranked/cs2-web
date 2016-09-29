import React from 'react';

import Page from '../Layouts/Page';
import Problems from '../Components/Problems';

export default class Problem extends React.Component {
  render() {
    let location = `/assets/${this.props.params.id}/problems.json`;
    return (
      <Page includeTitle={false} title="Lab" >
        <Problems src={location} />
      </Page>
    );
  }
}
