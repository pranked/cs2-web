import React from 'react';
import './TestSet.scss';

export default class TestSet extends React.Component {

  render() {
    const flatten = res => {
      let didPass = `glyphicon glyphicon-${res.passed === true ? 'ok' : 'removed'}`;
      return (
        <tr key={res.name} >
          <td>{res.name}</td>
          <td>{res.output}</td>
          <td>{res.duration}ms</td>
          <td><span className={didPass}></span></td>
        </tr>
      );
    };
    const tables = item => {
      return (
        <div key={item.parent}>
          <h4><i className="glyphicon glyphicon-copyright-mark text-muted" /> {item.parent}</h4>
          <table className="table" >
            <colgroup>
              <col className="col-xs-4" />
              <col className="col-xs-8" />
              <col className="col-xs-1" />
              <col className="col-xs-1" />
            </colgroup>
            <thead>
              <tr>
                <th>Name</th>
                <th>Output</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody id="table-body" >
              {item.results.map(flatten)}
            </tbody>
          </table>
        </div>
      );
    };
    return (
      <div>
        {this.props.items.map(tables)}
      </div>
    );
  }
}
TestSet.propTypes = {
  items: React.PropTypes.any.isRequired
}
