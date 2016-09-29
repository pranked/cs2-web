import React from 'react';

import List from '../Components/List';
import UMLSet from '../Components/UMLSet';
import TestSet from '../Components/TestSet';

const Analysis = React.createClass({
  propTypes: {
    problem: React.PropTypes.object.isRequired,
  },
  render() {
    let ana;
    if (this.props.problem.analysis) {
      ana = (
        <div>
          <h3>Objectives</h3>
          <List list={this.props.problem.analysis.objectives} />
          <h3>Inputs</h3>
          <List list={this.props.problem.analysis.inputs} />
          <h3>Outputs</h3>
          <List list={this.props.problem.analysis.outputs} />
          <h3>Assumptions</h3>
          <List list={this.props.problem.analysis.assumptions} />
          <h3>Constraints</h3>
          <List list={this.props.problem.analysis.constraints} />
          <h3>Design</h3>
          <List list={this.props.problem.analysis.design} />
        </div>);
    }
    let desc;
    if (this.props.problem.descriptions) {
      desc = (<UMLSet descriptions={this.props.problem.descriptions} />);
    }
    let tes;
    if (this.props.problem.testSets) {
      tes = <TestSet items={this.props.problem.testSets} />;
    }
    return (
      <div>
        <blockquote>
          <h2><i className="glyphicon glyphicon-link text-muted" /> {this.props.problem.name}</h2>
        </blockquote>
        <hr />
        {ana}
        {desc}
        {tes}
      </div>
    );
  },
});

export default Analysis;
