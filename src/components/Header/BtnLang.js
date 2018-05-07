import React from 'react';

export class BtnLang extends React.Component {
  render(){
    return <a onClick={this.props.clicking} className="idioma_btn">{this.props.lang}</a>;
  }
}
