import React from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainLayout = React.createClass({
  render() {
    return (
      <div className="page-fill">
        <div className="page-wrap" >
          <Header />
          <div className="container" >
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  },
});

export default MainLayout;
