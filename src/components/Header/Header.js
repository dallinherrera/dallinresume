import React from 'react';
import BtnLang from './BtnLang';
import Brand from './Brand';
import Navigation from './Navigation';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid header_nav">
          <Brand />
          <div style={{float: 'right'}}>
            <BtnLang langText='EN' clicking={this.props.toEnglish} btnClass="idioma_btn_active" id="btnEnglish"/>
            <BtnLang langText='ES' clicking={this.props.toSpanish} btnClass="idioma_btn" id="btnSpanish"/>
          </div>
        </div>
        <Navigation info={this.props.info}/>
      </div>
    );
  }
}

export default Header;
