import React from 'react';

class Certificates extends React.Component {
  render() {
    return(
      <div>
        <p>
          <span style={{fontWeight:'500'}}>Name: </span>
          <a href={this.props.CertificatesInfo.url}>{this.props.CertificatesInfo.title}</a>
        </p>
        <p>
          <span style={{fontWeight:'500'}}>By: </span>
          {this.props.CertificatesInfo.by}
        </p>
        <hr />
      </div>
    );
  }
}

export default Certificates;
