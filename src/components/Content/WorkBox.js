import React from 'react';
import Work from './Work';

class WorkBox extends React.Component {

  render() {
    return (
      <div className="jumbotron">
        {this.props.info.map((work, index) => <Work key={index} workInfo= {work}/>)}
      </div>
    );
  }
}

export default WorkBox;
