import React from 'react';
import Titles from './Titles';
import About from './About';
import WorkBox from './WorkBox';
import SkillsBox from './SkillsBox';
import ProjectsBox from './ProjectsBox';
import CertificatesBox from './CertificatesBox';

class Content extends React.Component {

  render() {
    const info = this.props.info;
    return (
      <div className="container" style={{marginBottom:'7.5em'}} id="content_english">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">

            <About url={info.photo.url} alt={info.photo.alt} about={info.about}/>

          </div>

          <div className="col-xs-12 col-sm-6 col-md-8">

            <Titles titleText={info.headers.header1} id={info.headers.header1}/>
            <WorkBox info={info.work}/>
            <Titles titleText={info.headers.header2} id={info.headers.header2}/>
            <SkillsBox info={info.skills} />
            <Titles titleText={info.headers.header3} id={info.headers.header3}/>
            <ProjectsBox info={info.projects}/>
            <Titles titleText={info.headers.header4} id={info.headers.header4}/>
            <CertificatesBox info={info.certificates}/>

          </div>

        </div>
      </div>
    );
  }
}

export default Content;
