import React from 'react';
import Skills from './Skills';

class SkillsBox extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        {this.props.info.map(skill => <Skills skillsInfo={skill} />)}
      </div>
    );
  }
}

export default SkillsBox;
