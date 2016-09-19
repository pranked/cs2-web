/**
 * Created by dom on 9/15/16.
 */

import React from 'react';
import {Link} from 'react-router'

const NavigationTree = React.createClass({
    render() {
        var flatten = function (item) {
            return (
                <li key={item.name}>
                    <Link to={item.url}>{item.name}</Link>
                </li>
            )
        };
        return (
            <ul className="nav navbar-nav">
                {this.props.items.map(flatten)}
            </ul>
        );
    }
});

export default NavigationTree;
