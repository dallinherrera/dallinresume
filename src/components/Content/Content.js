import React from 'react';
import {Title} from './Title';
import {About} from './About';
import WorkBox from './WorkBox';
import SkillsBox from './SkillsBox';
import ProjectsBox from './ProjectsBox';
import CertificatesBox from './CertificatesBox';

export class Content extends React.Component {

  render() {
    const info = {
    about: "My name is Dallin Herrera. I'm a Web Developer. I am 28 years old, passionate about technology, knowledge, art, creativity, order. I like to improve myself through studying, practicing sports and overcoming personal or team challenges, because I have the ability to achieve anything that I propose through discipline and perseverance.",
    contact: "E-mail: dallinherrera@gmail.com, Cel: (044) 771-134-7276.",
    education: "Bachelor of Information and Communications Technology",
    university: "Universidad Interactiva Milenio",
    photo: {url:"images/dall_cv2.png", alt:"profile picture"},
    work: [
      {
        title: "Freelancer",
        company: "My own",
        period: "Jan 2017 - Today",
        descrip: "Design and develop of responsive Web Pages."
      },
      {
        title: "Front-end Developer",
        company: "AVIZ",
        period: "Jan 2016 - Oct 2016",
        descrip: "Design and develop HTML structure and responsive Styles in CSS."
      },

      {
        title: "GOD",
        company: "SkyRocket",
        period: "Pasado - Futuro",
        descrip: "Disign and arquitecture of the planet Earth."
      }
    ],

    skills: [
      {
        period: 2018,
        skills: "React.js"
      },

      {
        period: 2017,
        skills: "Java Servlets, JSP, RESTful Web Services, Ajax, JavaScript."
      },

      {
        period: 2016,
        skills: "Bootstrap, HTML, CSS, Git"
      }
    ],

    projects: [
      {
        title: "Dallin Resume",
        url: "http://dallinresume.bitballoon.com/",
        descrip: "My first react App. A single page application. #bootstrap",
        period: "2018"
      },
      {
        title: "Chivas Emblemas 3D",
        url: "https://chivasemblemas3d.com/",
        descrip: "A shop online, connected to the original web domain, structured and disigned with Shopify.",
        period: "2017"
      }
    ],

    certificates: [
      {
        title: "FrontEnd Developer",
        url: "https://capacitateparaelempleo.org/verifica/ar9kq8826/",
        by: "Carlos Slim Fundation"
      },

      {
        title: "Data Curator",
        url: "https://capacitateparaelempleo.org/verifica/4wcc90oc2/",
        by: "Carlos Slim Fundation"
      },

      {
        title: "JavaScript",
        url: "https://www.sololearn.com/Certificate/1024-6692470/pdf/",
        by: "SoloLearn"
      }
    ]
  }

    return (
      <div className="container" style={{marginBottom:'7.5em'}} id="content_english">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">

            <About url={info.photo.url} alt={info.photo.alt} about={info.about}/>

          </div>

          <div className="col-xs-12 col-sm-6 col-md-8">
            <Title title="WORK" id="work"/>
            <WorkBox info={info.work}/>
            <Title title="SKILLS" id="skills"/>
            <SkillsBox info={info.skills} />
            <Title title="PROJECTS" id="projects"/>
            <ProjectsBox info={info.projects}/>
            <Title title="CERTIFICATES" id="certificates"/>
            <CertificatesBox info={info.certificates}/>

          </div>

        </div>
      </div>
    );
  }
}
