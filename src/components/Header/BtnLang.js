import React from 'react';

class BtnLang extends React.Component {
  render(){
    return <a onClick={this.props.clicking} className="idioma_btn">{this.props.langText}</a>;
  }
}

export default BtnLang;
