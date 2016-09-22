import React from 'react';
import Analysis from '../Components/Analysis';
import Spinner from '../Components/Spinner';
import $ from 'jquery';
import _ from 'lodash';

export default class Problems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: [],
      loaded: false,
    };
  }
  componentDidMount() {
    $.get(this.props.src, (result) => {
      let obj = result;
      if (!_.isObject(result)) {
        obj = $.parseJSON(result);
      }
      this.setState({
        problems: obj,
        loaded: true,
      });
    }).fail(() => {
      alert('Failed to load problem data! ');
    });
  }
  render() {
    if (this.state.loaded !== true) {
      return <Spinner />;
    }
    return (
      <div>
        {this.state.problems.map(p => {
          return (
            <Analysis problem={p} key={p.name} />
          );
        })}
      </div>
    );
  }
}
Problems.propTypes = {
  src: React.PropTypes.string.isRequired,
};
