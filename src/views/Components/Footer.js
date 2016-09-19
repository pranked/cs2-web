import React from 'react';

const Footer = React.createClass({
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-4 text-muted">
                            Authored by Dominic Moorman
                            <ul className="links">
                                <li><a href="http://github.com/pranked">Github</a></li>
                                <li><p>do<span></span>m@<span></span>le<span></span>vee.co</p></li>
                            </ul>
                        </div>
                        <div className="col-xs-4"></div>
                        <div className="col-xs-4 text-muted text-right">
                            Copyright &copy; levee.co 2016
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
});

export default Footer;