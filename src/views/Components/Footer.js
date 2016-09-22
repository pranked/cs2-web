import React from 'react';

import './Footer.scss';

const Footer = React.createClass({
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-4">
              <ul className="sub-list">
                <li><span className="sub-header">Authored by Dominic Moorman</span></li>
                <li><a href="http://github.com/pranked">Github</a></li>
                <li><a href="mailto:dom@levee.co ">dom@levee.co</a></li>
              </ul>
            </div>
            <div className="col-xs-4"></div>
            <div className="col-xs-4 text-right">
              <div className="text-small">Copyright © 2016</div>
              <span>levee.co</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
});

export default Footer;
