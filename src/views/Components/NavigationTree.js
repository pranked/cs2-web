/**
 * Created by dom on 9/15/16.
 */

import React from 'react';
import { Link } from 'react-router';

const NavigationTree = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired
  },
  render() {
    const flatten = (item) => {
      return (
        <li key={item.name}>
          <Link to={item.url} activeClassName="selected">{item.name}</Link>
        </li>
      );
    };
    return (
      <ul className="nav nav-pills">
        {this.props.items.map(flatten)}
      </ul>
    );
  }
});

export default NavigationTree;
