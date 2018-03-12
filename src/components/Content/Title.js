import React from 'react';

export class Title extends React.Component {
  render() {
    return <h2 className="h2_style" id={this.props.id}>{this.props.title}</h2>
  }
}
