import React from 'react';

export default class Images extends React.Component {
  render() {
    return (
      <div className="row" >
        {this.props.images.map(img => {
          const width = 200;
          const height = 100;
          return (
            <div className="col-xs-4" key={img} >
              <img src={img} alt="img" className="image-rounded" width={width} height={height} />
            </div>
          );
        })}
      </div>
    );
  }
}
Images.propTypes = {
  images: React.PropTypes.array.isRequired,
};
