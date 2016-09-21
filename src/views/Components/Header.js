/**
 * Created by dom on 9/15/16.
 */

import React from 'react';
import NavigationTree from './NavigationTree';

import { Link } from 'react-router';

import './Header.scss';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navs: [
        {
          name: 'Doesnt Work',
          url: '404',
          selected: false,
        },
        {
          name: 'Lab 2',
          url: 'lab2',
          selected: false,
        },
      ],
    };
  }

  render() {
    return (
      <nav className="header-purple" >
        <div className="container" >
          <div className="header-title"><Link to="/">CS2</Link></div>
          <NavigationTree items={this.state.navs} />
        </div>
      </nav>
    );
  }
}