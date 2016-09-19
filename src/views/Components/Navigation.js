/**
 * Created by dom on 9/15/16.
 */

import React from 'react';
import NavigationTree from './NavigationTree';

const Navigation = React.createClass({
    getInitialState: function () {
        return {items: [
            {name: "Home", url:'/'}
        ]};
    },
    onChange: function (e) {

    },
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed">
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                        <a className="navbar-brand" href="#">CS2</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <NavigationTree items={this.state.items}/>
                    </div>
                </div>
            </nav>
        );
    }
});

export default Navigation;
