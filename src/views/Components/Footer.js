import React from 'react';

import './Footer.scss';

const Footer = React.createClass({
  render() {
    const size = '35px';
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-4">
              <ul className="sub-list">
                <li><a href="https://github.com/pranked"><img className="img-circle" src="https://avatars1.githubusercontent.com/u/9093726" alt="" width={size} height={size} /> <span className="sub-header">Created by @pranked</span></a></li>
                <li><a href="mailto:dom@levee.co ">dom@levee.co</a></li>
              </ul>
            </div>
            <div className="col-xs-4"></div>
            <div className="col-xs-4 text-right">
              <div className="text-small"><a href="https://github.com/pranked/cs2-web/blob/master/LICENSE.md">MIT License</a></div>
              <span>Levee.co</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
});

export default Footer;
