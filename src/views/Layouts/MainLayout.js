import React from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainLayout = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <div className="container" >
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
});

export default MainLayout;
