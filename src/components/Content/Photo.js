import React from 'react';

export class Photo extends React.Component {
  render() {
    return <img className="img-responsive img-rounded" src={this.props.src} alt={this.props.alt} />
  }
}
