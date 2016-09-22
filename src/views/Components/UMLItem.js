import React from 'react';

const UMLItem = React.createClass({
  render() {
    const flattenParams = args => {
      let i = 0;
      const flatten = inner => (
        <span key={i++} className="code-orange">{inner} </span>
      );
      return (
        <span>
          <span className="color-gray">( </span>
          {args.map(flatten)}
          <span className="color-gray">)</span>
        </span>
      );
    };

    const flat = item => {
      let x = item.protected ? '#' : (item.public ? '+' : '-');
      let params = (
        <span>
          <span className="color-gray">( )</span>
        </span>
      );
      if (item.args) {
        params = flattenParams(item.args);
      }
      return (
        <div key={item.key} className="uml-item">
          <span className="text-muted">{x} </span>
          <span className="code-pink">{item.type} </span>
          <span className="code-lightblue">{item.name} </span>
          {params}
        </div>
      );
    };

    return (
      <div className="col-xs-4">
        <div className="panel panel-default">
          <div className="panel-body">
            <h4 className="uml-title">{this.props.parent}</h4>
            <div className="uml-divider"></div>
            {this.props.fields.map(flat)}
            <div className="uml-divider"></div>
            {this.props.methods.map(flat)}
          </div>
        </div>
      </div>
    );
  }
});

export default UMLItem;
