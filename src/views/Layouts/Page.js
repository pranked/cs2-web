import React from 'react';
import DocumentTitle from "react-document-title";
import './Page.scss';

const Page = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render() {
        let title = "CS2 - " + this.props.title;
        return (
            <DocumentTitle title={title}>
                <div>
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </div>
            </DocumentTitle>
        );
    }
});

export default Page;
