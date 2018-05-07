import React from 'react';
import Certificates from './Certificates';

class CertificatesBox extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        {this.props.info.map((certificate, index) => <Certificates key={index} CertificatesInfo={certificate} />)}
      </div>
    );
  }
}

export default CertificatesBox;
