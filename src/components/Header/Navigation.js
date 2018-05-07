import React from 'react';
import NavigationLink from './NavigationLink';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{borderBottom:'solid 1px #000d36'}}>
        <NavigationLink linkText={this.props.info.headers.header1} link={this.props.info.headers.header1}/>
        <NavigationLink linkText={this.props.info.headers.header2} link={this.props.info.headers.header2}/>
        <NavigationLink linkText={this.props.info.headers.header3} link={this.props.info.headers.header3}/>
        <NavigationLink linkText={this.props.info.headers.header4} link={this.props.info.headers.header4}/>
      </div>
    );
  }
}

export default Navigation;
