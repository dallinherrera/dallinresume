import React from 'react';
import Certificates from './Certificates';

class CertificatesBox extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        {this.props.info.map(certificate => <Certificates CertificatesInfo={certificate} />)}
      </div>
    );
  }
}

export default CertificatesBox;
