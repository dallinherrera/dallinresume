import React from 'react';

class Projects extends React.Component {
  render() {
    return(
      <div>
        <p>
          <span style={{fontWeight:'500'}}>Title: </span>
          <a href={this.props.ProjectsInfo.url}>{this.props.ProjectsInfo.title}</a>
        </p>
        <p>
          <span style={{fontWeight:'500'}}>Description: </span>
          {this.props.ProjectsInfo.descrip}
        </p>
        <hr />
      </div>
    );
  }
}

export default Projects;
