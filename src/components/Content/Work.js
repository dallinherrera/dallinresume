import React from 'react';

class Work extends React.Component {
  render() {
    return(
      <div>
        <h2>{this.props.workInfo.title}</h2>
        <h4>{this.props.workInfo.company}</h4>
        <date>{this.props.workInfo.period}</date>
        <p>{this.props.workInfo.descrip}</p>
      </div>
    );
  }
}

export default Work;
