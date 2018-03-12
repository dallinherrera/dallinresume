import React from 'react';
import Work from './Work';

class WorkBox extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        {this.props.info.map(work => <Work workInfo={work}/>)}
      </div>
    );
  }
}

export default WorkBox;
