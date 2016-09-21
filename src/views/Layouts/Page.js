import React from 'react';
import DocumentTitle from 'react-document-title';

const Page = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    includeTitle: React.PropTypes.bool,
  },
  getDefaultProps() {
    return {
      includeTitle: true,
    };
  },
  render() {
    let title = `CS2 - ${this.props.title}`;
    let comp = <h1>{this.props.title}</h1>;
    if (this.props.includeTitle === false) {
      comp = null;
    }
    return (
      <DocumentTitle title={title}>
        <div>
          {comp}
          {this.props.children}
        </div>
      </DocumentTitle>
    );
  },
});

export default Page;
