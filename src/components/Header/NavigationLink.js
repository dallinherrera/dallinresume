import React from 'react';

class NavigationLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-xs-6 col-sm-3 text-center">
        <a className="navigationLink" href={"index.html#" + this.props.link} style={{margin:'3px'}}>{this.props.linkText}</a>
      </div>
    );
  }
}

export default NavigationLink;
