import React from 'react';
import Photo from './Photo';

class About extends React.Component {
  render() {
    return(
      <div className="row" id="about">
        <div className="col-xs-12">
          <Photo src={this.props.url} alt={this.props.alt}/><br />
          <div className="jumbotron">
            <p className="text-center">{this.props.about}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
