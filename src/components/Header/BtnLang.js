import React from 'react';

class BtnLang extends React.Component {
  render(){
    return <a onClick={this.props.clicking} className={this.props.btnClass} id={this.props.id}>{this.props.langText}</a>;
  }
}

export default BtnLang;
