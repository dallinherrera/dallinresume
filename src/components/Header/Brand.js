import React from 'react';

function Brand(props) {
  return (
    <div className="navbar-header" style={{float: 'left'}}>
      <a href="index.html"><img id="img_logo" style={{display:'block', float:'left', margin:'4px', borderRadius:'30%'}} src="images/dall_cv_mini.png" alt="logo brand"/></a>
      <a href="index.html" className="navbar-brand" style={{display:'block', color: '#fff'}}>
        <h1 style={{fontSize: '20px', margin: '0px'}}>Dallin Herrera Vizuett</h1>
      </a>
    </div>
  )
}

export default Brand;
