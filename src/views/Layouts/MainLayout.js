import React from 'react';

import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer'

const MainLayout = React.createClass({
    render() {
        return (
            <div>
                <Navigation/>
                <div className="container">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
});

export default MainLayout;
