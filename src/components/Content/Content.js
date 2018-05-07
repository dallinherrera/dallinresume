import React from 'react';
import {Title} from './Title';
import {About} from './About';
import WorkBox from './WorkBox';
import SkillsBox from './SkillsBox';
import ProjectsBox from './ProjectsBox';
import CertificatesBox from './CertificatesBox';

export class Content extends React.Component {

  render() {
    return (
      <div className="container" style={{marginBottom:'7.5em'}} id="content_english">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">

            <About url={this.props.info.photo.url} alt={this.props.info.photo.alt} about={this.props.info.about}/>

          </div>

          <div className="col-xs-12 col-sm-6 col-md-8">
            <Title title="WORK" id="work"/>
            <WorkBox info={this.props.info.work}/>
            <Title title="SKILLS" id="skills"/>
            <SkillsBox info={this.props.info.skills} />
            <Title title="PROJECTS" id="projects"/>
            <ProjectsBox info={this.props.info.projects}/>
            <Title title="CERTIFICATES" id="certificates"/>
            <CertificatesBox info={this.props.info.certificates}/>

          </div>

        </div>
      </div>
    );
  }
}
