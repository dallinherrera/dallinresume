import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.english = {
      headers: {
        header1: "JOB",
        header2: "SKILLS",
        header3: "PROJECTS",
        header4: "CERTIFICATES",
      },
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
    };
    this.espanol = {
      headers: {
        header1: "HISTORIAL DE EMPLEO",
        header2: "HABILIDADES",
        header3: "PROYECTOS",
        header4: "CERTIFICADOS",
      },
      about: "Mi nombre es Dallin Herrera. Soy un Web Developer. Tengo 28 años de edad, soy apasionado de la tecnología, el conocimiento, el arte, la creatividad, el orden. Me gusta superarme a mi mismo mediante el estudio, la practica de deportes y los retos personales o en equipo, porque tengo la habilidad de lograr cualquier cosa que me proponga mediante la disciplina y la perseverancia.",
      contact: "E-mail: dallinherrera@gmail.com, Cel: (044) 771-134-7276.",
      education: "Diplomado en Programacion Web",
      university: "Universidad Interactiva Milenio",
      photo: {url:"images/dall_cv2.png", alt:"foto de perfil"},
      work: [
        {
          title: "Freelancer",
          company: "Propietario",
          period: "Enero 2017 - Today",
          descrip: "Diseño y desarrollo de paginas web responsivas."
        },
        {
          title: "Desarrollador Front-end",
          company: "AVIZ",
          period: "Enero 2016 - Octubre 2016",
          descrip: "Diseño y desarollo de la estructura HTML, diseño responsivo con estilos CSS, con uso de librerias como bootstrap."
        },

        {
          title: "Dios",
          company: "SkyRocket",
          period: "Pasado - Futuro",
          descrip: "Diseño y arquitectura del planeta tierra."
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
          descrip: "Mi primera aplicación en React. Una aplicación 'single page'. #bootstrap",
          period: "2018"
        },
        {
          title: "Chivas Emblemas 3D",
          url: "https://chivasemblemas3d.com/",
          descrip: "Una tienda en línea, conectada al dominio original de la pagina, estructurada y diseñada en Shopify.",
          period: "2017"
        }
      ],

      certificates: [
        {
          title: "Desarrollador FrontEnd",
          url: "https://capacitateparaelempleo.org/verifica/ar9kq8826/",
          by: "Fundación Carlos Slim"
        },

        {
          title: "Curador de datos",
          url: "https://capacitateparaelempleo.org/verifica/4wcc90oc2/",
          by: "Fundación Carlos Slim"
        },

        {
          title: "JavaScript",
          url: "https://www.sololearn.com/Certificate/1024-6692470/pdf/",
          by: "SoloLearn"
        }
      ]
    };
    this.state = { lang: this.english };
    this.changeToSpanish = this.changeToSpanish.bind(this);
    this.changeToEnglish = this.changeToEnglish.bind(this);
  }

  changeToSpanish(e) {
    this.setState({lang: this.espanol});
    document.getElementById('btnEnglish').className="idioma_btn";
    document.getElementById('btnSpanish').className="idioma_btn_active";
  }

  changeToEnglish(e) {
    this.setState({lang: this.english});
    document.getElementById('btnSpanish').className="idioma_btn";
    document.getElementById('btnEnglish').className="idioma_btn_active";

  }

  render() {


    return (
      <div>
        <Header toEnglish={this.changeToEnglish} toSpanish={this.changeToSpanish} info={this.state.lang}/>
        <Content info={this.state.lang}/>
        <Footer />
      </div>
    );
  }
}
