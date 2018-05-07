import React from 'react';
import {BtnLang} from './BtnLang';
import Brand from './Brand';
import {Navigation} from './Navigation';

export class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid header_nav">
          <Brand />
          <div style={{float: 'right'}}>
            <BtnLang lang='ES' clicking={this.props.clicking}/>
          </div>
        </div>
        <Navigation />
      </div>
    );
  }
}
