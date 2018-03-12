import React from 'react';

export class BtnLang extends React.Component {
  render(){
    return <a id={this.props.id} className="idioma_btn">{this.props.lang}</a>;
  }
}
