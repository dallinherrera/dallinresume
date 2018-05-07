import React from 'react';

class Photo extends React.Component {
  render() {
    return <img className="img-responsive img-rounded" src={this.props.src} alt={this.props.alt} />
  }
}

export default Photo;
