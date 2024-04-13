import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect'
import './App.css';
import vithuImage from './assets/vithu.png';
import AboutMePopup from './AboutMePopup';
import eldr from './assets/eldr.png';
import fantasy from './assets/fantasy_nba.png';
import datum from './assets/datum_monitor.png';
import covidex from './assets/covidex.png';
import mave from './assets/mave.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';

// Import skill logos
import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import javascriptLogo from './assets/javascript.png';
import javaLogo from './assets/java.png';
import pythonLogo from './assets/python.png';
import cppLogo from './assets/css.png';
import bootstrapLogo from './assets/bootstrap.png';
import reactLogo from './assets/react.png';
import sqlLogo from './assets/sql.png';
import typescriptLogo from './assets/typescript.png';
import GitLogo from './assets/git.png';
import JiraLogo from './assets/jira.png';
import GrafanaLogo from './assets/grafana.png';
import LinuxLogo from './assets/linux.png';
import FigmaLogo from './assets/figma.png';
import JenkinsLogo from './assets/jenkins.png';
import PrometheusLogo from './assets/prometheus.png';
import KubernetsLogo from './assets/kubernets.png';
import AmazonLogo from './assets/amazon.png';
import VisualStudioLogo from './assets/visual-studio-code.png';
import DockerLogo from './assets/docker.png';

import vithuCV from './assets/vithuCV.pdf';




function App() {
  const [isAboutMePopupOpen, setIsAboutMePopupOpen] = useState(false);

  const openAboutMePopup = () => {
    setIsAboutMePopupOpen(true);
  };

  const closeAboutMePopup = () => {
    setIsAboutMePopupOpen(false);
  };




  // Programming languages
  const programmingLanguages = [
    { name: 'HTML', logo: htmlLogo},
    { name: 'CSS', logo: cssLogo},
    { name: 'JavaScript', logo: javascriptLogo},
    { name: 'Java', logo: javaLogo},
    { name: 'Python', logo: pythonLogo},
    { name: 'C++', logo: cppLogo},
    { name: 'SQL', logo: sqlLogo},
    { name: 'React', logo: reactLogo},
    { name: 'TypeScript', logo: typescriptLogo},
  ];

  // Tools & Technologies
  const toolsAndTechnologies = [
    { name: 'GitHub', logo: github},
    { name: 'Git', logo: GitLogo},
    { name: 'Visual Studio', logo: VisualStudioLogo},
    { name: 'Jira', logo: JiraLogo},
    { name: 'Linux/UNIX', logo: LinuxLogo},
    { name: 'Grafana', logo: GrafanaLogo},
    { name: 'AWS EC2', logo: AmazonLogo},
    { name: 'Prometheus', logo: PrometheusLogo},
    { name: 'Jenkins', logo: JenkinsLogo},
    { name: 'Kubernetes', logo: KubernetsLogo},
    { name: 'Docker', logo: DockerLogo},
    { name: 'Figma', logo: FigmaLogo},
    { name: 'Bootstrap', logo: bootstrapLogo},
  ];




  // Image Shadow
  const [hasBoxShadow, setHasBoxShadow] = useState(false);

  useEffect(() => {
    // Toggle the class every second
    const intervalId = setInterval(() => {
      setHasBoxShadow(prevState => !prevState);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    <div className="background-container">
      <nav className="navbar">
        <div className="left-side">
          <span className="website-name">Vithushen Sivasubramaniam</span>
        </div>
        <div className="right-side">
          <a href="#skills" className="nav-link">My Skills</a>
          <a href="#projects" className="nav-link">My Projects</a>
          <a href="https://www.linkedin.com/in/vithushen-sivasubramaniam/" target="_blank" rel="noopener noreferrer" className="nav-link">My LinkedIn</a>
          <a href="https://github.com/vithushen" target="_blank" rel="noopener noreferrer" className="nav-link">My GitHub</a>
        </div>
      </nav>
      <div className="flex-container">
        <img src={vithuImage} alt="vithuImage" className={`vithuImageF ${hasBoxShadow ? 'withBoxShadow' : ''}`} />
        <div className="text-content">
          <div className='h1'>
            <h1 style={{ fontFamily: 'Young Serif', letterSpacing: '5px' }}>WELCOME!</h1>


            <div className="typewriter-text">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 100,
                  strings: ["I am a Software Engineer!", "Looking for a Job Opportunity!", "Always Learning New Tech!"]
                }}
              />
            </div>

          </div>
          <div className='p'>
            <p>My name is Vithushen Sivasubramaniam and I am a graduate from Concordia University as a Software Engineer and have a passion for programming. Having recently completed my studies and acquired a solid foundation in programming languages. I have strong knowledge in Frontend, Backend, Databases, SRE, Testing and many other skills that I would love to discuss in a interview!
            </p>
            <p>Feel free to contact me at vithu.99@hotmail.com!</p>
          </div>
          <div className='buttonCss'>
            <button onClick={openAboutMePopup}>About Me</button>
            <button className='preview' onClick={() => { window.open(vithuCV, '_blank'); }}>
              Hire Me
            </button>
          </div>
          {isAboutMePopupOpen && (
            <AboutMePopup onClose={closeAboutMePopup} />
          )}
        </div>
      </div>

      <div className='skills' id='skills'>
        <h1 className='title' style={{ fontSize: '60px' }}>My Skills</h1>
        <h1 className='title' style={{ fontSize: '50px' }}>Programming Languages</h1>
        <div className='skills-container'>
          {programmingLanguages.map(skill => (
            <div key={skill.name} className='skill-item'>
              <a href={skill.link} target="_blank" rel="noopener noreferrer" >
                <img src={skill.logo} alt={skill.name} className='skill-logo' />
              </a>
              <p className='skill-name'>{skill.name}</p>
            </div>
          ))}
        </div>

        <h1 className='title' style={{ fontSize: '50px' }}>Tools & Technologies</h1>
        <div className='skills-container'>
          {toolsAndTechnologies.map(tool => (
            <div key={tool.name} className='skill-item'>
              <a href={tool.link} target="_blank" rel="noopener noreferrer" >
                <img src={tool.logo} alt={tool.name} className='skill-logo' />
              </a>
              <p className='skill-name'>{tool.name}</p>
            </div>
          ))}
        </div>
      </div>



      <div className='projects' id='projects'>
        <h1 className='title-project' style={{ fontSize: '50px' }}>My Projects</h1>
        <div className='project-container'>
          <div className='image-container'>
            <img src={datum} alt='Project' className='datum-image' />
          </div>
          <div className='project-details'>
            <h1 className='title-datum' style={{ textAlign: "center" }}>datum.io</h1>
            <p className='description' style={{ color: "white", textAlign: 'left' }}>The purpose of this project is to design a mobile application to allow researchers to collect data for a specific study that encourages repeated engagement through gamification.</p>
            <p className='description' style={{ color: "white", textAlign: 'left' }}>A user-centered approach will be applied to encourage usability and engagement. The application would be usable for a variety of different research studies (e.g. mental health studies, product engagement studies, etc.). Hence, it could be used in a wide array of fields.</p>
            <div className='button-container'>
              <button className='preview' onClick={() => { window.location.href = 'https://datum-io.app/user/dashboard'; }}>
                Preview
              </button>
              <button className='source' onClick={() => { window.location.href = 'https://github.com/vithushen'; }}>Source</button>
            </div>
          </div>
        </div>



        <div className='project-container'>
          <div className='project-details'>
            <h1 className='title-covidex' style={{ textAlign: "center" }}>Covidex</h1>
            <p className='description' style={{ color: "white", textAlign: 'left' }}>Covidex is a covid-19 tracking application designed for multiple users such as common patients, doctors, health officials and and immigration officials. Its goal is to help us deal with the reality of the situation we currently face and try to move forward.</p>
            <p className='description' style={{ color: "white", textAlign: 'left' }}>Patients would be able to upload their health status details onto the platform. This in turn would be monitored by both doctors and health officials to both help the patients as well as track the progress of the virus. We would be able to monitor daily cases and get a better understanding of how the virus is changing to help mitigate the risks for the rest of the population.</p>
            <div className='button-container'>
              <button className='preview' onClick={() => { window.location.href = 'https://covidex.live/'; }}>
                Preview
              </button>
              <button className='source' onClick={() => { window.location.href = 'https://github.com/vithushen'; }}>Source</button>
            </div>
          </div>
          <div className='second-container'>
            <img src={covidex} alt='Project' className='covidex-image' />
          </div>
        </div>

        <div className='project-container'>
          <div className='image-container'>
            <img src={fantasy} alt='Project' className='fantasy-image' />
          </div>
          <div className='project-details'>
            <h1 className='title-fantasy' style={{ textAlign: "center" }}>NBA Fantasy Helper</h1>
            <p className='description' style={{ color: "white", textAlign: 'left' }}>NBA Fantasy Draft Helper is your ultimate companion for building a winning fantasy basketball team! This innovative project brings together the power of data and user-friendly design, providing NBA enthusiasts with a comprehensive tool to make the best decisions during their fantasy drafts.</p>
            <p className='description' style={{ color: "white", textAlign: 'left' }}>NBA Stats Explorer simplifies the process of understanding player performance by offering a visually appealing and easy-to-navigate platform. Whether you're a fantasy basketball enthusiast, a sports analyst, or just a passionate NBA fan, this tool provides a unique perspective on player capabilities, fostering a deeper appreciation for the game.</p>
            <div className='button-container'>
              <button className='preview' onClick={() => { window.location.href = 'https://vithushen.github.io/NBA-Fantasy-Helper/'; }}>
                Preview
              </button>
              <button className='source' onClick={() => { window.location.href = 'https://github.com/vithushen/NBA-Fantasy-Helper'; }} >Source</button>
            </div>
          </div>
        </div>
        <div className='project-container'>
          <div className='project-details'>
            <h1 className='title-eldr' style={{ textAlign: "center" }}>Eldr</h1>
            <p className='description' style={{ color: "white", textAlign: 'left' }}>Eldr is a friendly app made for elderly people. It helps them talk to others, play games, and make new friends easily. The app is easy to use and makes seniors feel less lonely by connecting them with others.</p>
            <p className='description' style={{ color: "white", textAlign: 'left' }}>The Figma project and mockup website show how Eldr works, making it simple for everyone to understand its purpose: bringing happiness and friendship to older adults. Eldr is all about making seniors' lives better by connecting them with others in a fun and easy way.</p>
            <div className='button-container'>
              <button className='preview' onClick={() => { window.location.href = 'https://www.figma.com/proto/AeMKmKMeebpAjkK44w4yGK/Soen-357-Mini-Project?node-id=39-689&starting-point-node-id=39%3A590'; }}>
                Preview
              </button>
            </div>
          </div>
          <div className='second-container'>
            <img src={eldr} alt='Project' className='eldr-image' />
          </div>
        </div>
        <div className='background-bottom'>
          <div className='project-container'>
            <div className='image-container'>
              <img src={mave} alt='Project' className='fantasy-image' />
            </div>
            <div className='project-details'>
              <h1 className='title-fantasy' style={{ textAlign: "center" }}>Mave Grocery Store</h1>
              <p className='description' style={{ color: "white", textAlign: 'left' }}>Mave Grocery Store project is a  web application where customers can experience the convenience of grocery shopping from the comfort of their homes. By creating a personalized account, users gain access to a vast array of products from fresh produce to cleaning supplies. </p>
              <p className='description' style={{ color: "white", textAlign: 'left' }}>Our user-friendly interface allows customers to browse through a catalog, add items to their cart and securely complete their purchases online. With simple navigation, secure payment options and timely delivery services, our web application redefines the way people shop for groceries, making it effortless, efficient, and enjoyable.</p>
              <div className='button-container'>
                <button className='preview' onClick={() => { window.location.href = 'https://mave-grocery.web.app/index.html'; }}>
                  Preview
                </button>
                <button className='source' onClick={() => { window.location.href = 'https://github.com/Ellendra-JH/mave'; }} >Source</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <a href="mailto:vithu.99@hotmail.com">
          <span className="email">vithu.99@hotmail.com</span>
        </a>
        <div className="copyright">
          <p>&copy; 2023 Vithushen Sivasubramaniam. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
