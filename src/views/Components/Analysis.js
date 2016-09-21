import React from 'react';
import $ from 'jquery';

import Spinner from '../Components/Spinner';
import List from '../Components/List';
import UMLSet from '../Components/UMLSet';
import TestSet from '../Components/TestSet';

const Analysis = React.createClass({
  propTypes: {
    problem: React.PropTypes.string.isRequired,
  },
  getInitialState() {
    return {
      problem: {
        name: '',
        analysis: {},
        testSets: [],
        descriptions: [],
      },
      loaded: false,
    };
  },
  componentDidMount() {
    $.get(this.props.problem, (result) => {
      this.setState({
        problem: result,
        loaded: true,
      });
    }).fail(() => {
      alert('Failed to load problem data! ');
    });
  },
  render() {
    if (this.state.loaded !== true) {
      return (<Spinner />);
    }
    return (
      <div>
        <blockquote>
          <h2><i className="glyphicon glyphicon-link text-muted" /> {this.state.problem.name}</h2>
        </blockquote>
        <hr />
        <h3>Objectives</h3>
        <List list={this.state.problem.analysis.objectives} />
        <h3>Inputs</h3>
        <List list={this.state.problem.analysis.inputs} />
        <h3>Outputs</h3>
        <List list={this.state.problem.analysis.outputs} />
        <h3>Assumptions</h3>
        <List list={this.state.problem.analysis.assumptions} />
        <h3>Constraints</h3>
        <List list={this.state.problem.analysis.constraints} />
        <h3>Design</h3>
        <List list={this.state.problem.analysis.design} />
        <UMLSet descriptions={this.state.problem.descriptions} />
        <h3>Tests</h3>
        <TestSet items={this.state.problem.testSets} />
      </div>
    );
  }
});

export default Analysis;
