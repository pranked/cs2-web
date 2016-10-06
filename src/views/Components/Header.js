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
          name: 'Craps',
          url: '/lab/craps',
          selected: false,
        },
        {
          name: 'Lab 3',
          url: '/lab/lab3',
          selected: false,
        },
        {
          name: 'Lab 4',
          url: '/lab/lab4',
          selected: false,
        },
        {
          name: 'Lab 5',
          url: '/lab/lab5',
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