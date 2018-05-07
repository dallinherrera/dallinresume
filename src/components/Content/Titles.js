import React from 'react';

class Titles extends React.Component {
  render() {
    return <h2 className="h2_style" id={this.props.id}>{this.props.titleText}</h2>
  }
}

export default Titles;
