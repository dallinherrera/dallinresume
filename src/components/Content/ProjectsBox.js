import React from 'react';
import Projects from './Projects';

class ProjectsBox extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        {this.props.info.map(project => <Projects ProjectsInfo={project} />)}
      </div>
    );
  }
}

export default ProjectsBox;
