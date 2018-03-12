import React from 'react';

class Skills extends React.Component {
  render() {
    return(
      <div>
        <p><span style={{fontWeight:'500'}}>Period:</span> {this.props.skillsInfo.period}</p>
        <p><span style={{fontWeight:'500'}}>Skills:</span> {this.props.skillsInfo.skills}</p>
        <hr />
      </div>
    );
  }
}

export default Skills;
