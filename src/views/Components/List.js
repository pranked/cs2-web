import React from 'react';

const List = React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired
  },
  render() {
    let i = 0;
    const flat = item => {
      return (<li key={i++}>{item}</li>);
    };
    return (
      <div>
        <ol>
          {this.props.list.map(flat)}
        </ol>
      </div>
    );
  }
});

export default List;
