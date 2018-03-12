import React from 'react';
import {NavigationLink} from './NavigationLink';

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{borderBottom:'solid 1px #000d36'}}>
        <NavigationLink titulo="WORK" link="work"/>
        <NavigationLink titulo="SKILLS" link="skills"/>
        <NavigationLink titulo="PROJECTS" link="projects"/>
        <NavigationLink titulo="CERTIFICATES" link="certificates"/>
      </div>
    );
  }
}
