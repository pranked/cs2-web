import React from 'react';

import UMLItem from './UMLItem';

import './UMLSet.scss'

const UMLSet = React.createClass({
  propTypes: {
    descriptions: React.PropTypes.array.isRequired
  },
  getDefaultProps() {
    return {
      descriptions: []
    };
  },
  render() {
    const flatten = (item) => {
      return (
        <UMLItem key={item.parent} parent={item.parent} fields={item.fields} methods={item.methods} />
      );
    };
    return (
      <div className="row ">
        {this.props.descriptions.map(flatten)}
      </div>
    );
  }
});

export default UMLSet;
