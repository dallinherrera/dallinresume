import React from 'react';
import Photo from './Photo';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contacto from './Contacto';
import Title from './Title';

export class Content extends React.Component {

  render() {
    const titles = {title1:"EXPERIENCIA", title2:"OTRAS HABILIDADES", title3:"PORTAFOLIO", title4:"CONTACTO"};
    const titlesIds = {id1:"experiencia",id2:"habilidades",id3:"portafolio",id4:"contacto"};

    return (
      <div className="container" style={{marginBottom:'7.5em'}} id="content_espanol">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">

            <div className="row" id="about">
              <div className="col-xs-12">
                <Photo />
                <br />
                <About />
              </div>
            </div>

          </div>

          <div className="col-xs-12 col-sm-6 col-md-8">
            <div className="col">
              <Title title={titles.title1} id={titlesIds.id1}/>
              <Experience />
              <Title title={titles.title2} id={titlesIds.id2}/>
              <Skills />
              <Title title={titles.title3} id={titlesIds.id3}/>
              <Portfolio />
              <Title title={titles.title4} id={titlesIds.id4}/>
              <Contacto />
            </div>
          </div>

        </div>
      </div>
    );
  }
}
