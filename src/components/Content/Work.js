import React from 'react';

class Work extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.workInfo.title}</h2>
        <h4>{this.props.workInfo.company}</h4>
        <span>{this.props.workInfo.period}</span>
        <p>{this.props.workInfo.descrip}</p>
      </div>
    );
  }
}

export default Work;
