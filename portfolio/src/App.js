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

import datum1 from './assets/datum-1.png';
import datum2 from './assets/datum-2.png';
import datum3 from './assets/datum-3.png';
import datum4 from './assets/datum-4.png';
import datum5 from './assets/datum-5.png';

import mave1 from './assets/mave-1.png';
import mave2 from './assets/mave-2.png';
import mave3 from './assets/mave-3.png';
import mave4 from './assets/mave-4.png';

import covidex1 from './assets/covidex-1.png';
import covidex2 from './assets/covidex-2.png';
import covidex3 from './assets/covidex-3.png';

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
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'Java', logo: javaLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'C++', logo: cppLogo },
    { name: 'SQL', logo: sqlLogo },
    { name: 'React', logo: reactLogo },
    { name: 'TypeScript', logo: typescriptLogo },
  ];

  // Tools & Technologies
  const toolsAndTechnologies = [
    { name: 'GitHub', logo: github },
    { name: 'Git', logo: GitLogo },
    { name: 'Visual Studio', logo: VisualStudioLogo },
    { name: 'Jira', logo: JiraLogo },
    { name: 'Linux/UNIX', logo: LinuxLogo },
    { name: 'Grafana', logo: GrafanaLogo },
    { name: 'AWS EC2', logo: AmazonLogo },
    { name: 'Prometheus', logo: PrometheusLogo },
    { name: 'Jenkins', logo: JenkinsLogo },
    { name: 'Kubernetes', logo: KubernetsLogo },
    { name: 'Docker', logo: DockerLogo },
    { name: 'Figma', logo: FigmaLogo },
    { name: 'Bootstrap', logo: bootstrapLogo },
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

  const [currentProjectImageIndexes, setCurrentProjectImageIndexes] = useState({
    project1: 0,
    project2: 0,
    project3: 0,
    project4: 0,
    project5: 0,
  });

  // Define images for Project 1
  const project1Images = [datum1, datum2, datum3, datum4, datum5];

  // Define images for Project 2
  const project2Images = [covidex2, covidex1, covidex3];

   // Define images for Project 2
   const project3Images = [datum, covidex];

    // Define images for Project 2
    const project4Images = [mave1, mave2, mave3, mave4];

   // Define images for Project 2
   const project5Images = [datum, covidex];


   const handleNextImage = (project) => {
    setCurrentProjectImageIndexes((prevState) => {
      const projectImagesLength = {
        project1: project1Images.length,
        project2: project2Images.length,
        project3: project3Images.length,
        project4: project4Images.length,
        project5: project5Images.length,
      };
  
      return {
        ...prevState,
        [project]: (prevState[project] + 1) % projectImagesLength[project],
      };
    });
  };
  
  const handlePrevImage = (project) => {
    setCurrentProjectImageIndexes((prevState) => {
      const projectImagesLength = {
        project1: project1Images.length,
        project2: project2Images.length,
        project3: project3Images.length,
        project4: project4Images.length,
        project5: project5Images.length,
      };
  
      return {
        ...prevState,
        [project]: (prevState[project] - 1 + projectImagesLength[project]) % projectImagesLength[project],
      };
    });
  };


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

      <div className="projects" id="projects">
        <h1 className="title-project" style={{ fontSize: "50px" }}>
          My Projects
        </h1>

        {/* Project 1 */}
        <div className="project-container">
          <div className="project-details">
            <h2>Datum.io</h2>
            <p className="description">
              The purpose of this project is to design a mobile application to allow researchers to collect data for a specific study that encourages repeated engagement through gamification.
              <br></br>
              <br></br>
              A user-centered approach will be applied to encourage usability and engagement. The application would be usable for a variety of different research studies (e.g. mental health studies, product engagement studies, etc.). Hence, it could be used in a wide array of fields.
            </p>
            <div>
              <button className="button-preview-source" onClick={() => window.open('URL_FOR_PREVIEW', '_blank')}>Demo</button>
              <button className="button-preview-source" onClick={() => window.open('URL_FOR_SOURCE_CODE', '_blank')}>Source</button>
            </div>
          </div>
          <div className="project-image">
            <img className='image' src={project1Images[currentProjectImageIndexes.project1]} alt="Project 1" />
            <div>
              <button className='button-prev-next' onClick={() => handlePrevImage("project1")}>Previous</button>
              <button className='button-prev-next' onClick={() => handleNextImage("project1")}>Next</button>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-container">
          <div className="project-details">
            <h2>Covidex</h2>
            <p className="description">
              Covidex is a covid-19 tracking application designed for multiple users such as common patients, doctors, health officials and and immigration officials. Its goal is to help us deal with the reality of the situation we currently face and try to move forward.
              <br></br>
              <br></br>
              Patients would be able to upload their health status details onto the platform. This in turn would be monitored by both doctors and health officials to both help the patients as well as track the progress of the virus. We would be able to monitor daily cases and get a better understanding of how the virus is changing to help mitigate the risks for the rest of the population.
            </p>
            <div>
              <button className="button-preview-source" onClick={() => window.open('URL_FOR_PREVIEW', '_blank')}>Demo</button>
              <button className="button-preview-source" onClick={() => window.open('URL_FOR_SOURCE_CODE', '_blank')}>Source</button>
            </div>
          </div>
          <div className="project-image">
            <img className='image' src={project2Images[currentProjectImageIndexes.project2]} alt="Project 2" />
            <div>
              <button className='button-prev-next' onClick={() => handlePrevImage("project2")}>Previous</button>
              <button className='button-prev-next' onClick={() => handleNextImage("project2")}>Next</button>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-container">
          <div className="project-details">
            <h2>NBA Fantasy Helper</h2>
            <p className="description">
              NBA Fantasy Draft Helper is your ultimate companion for building a winning fantasy basketball team! This innovative project brings together the power of data and user-friendly design, providing NBA enthusiasts with a comprehensive tool to make the best decisions during their fantasy drafts.
              <br></br>
              <br></br>
              NBA Stats Explorer simplifies the process of understanding player performance by offering a visually appealing and easy-to-navigate platform. Whether you're a fantasy basketball enthusiast, a sports analyst, or just a passionate NBA fan, this tool provides a unique perspective on player capabilities, fostering a deeper appreciation for the game.
            </p>
            <div>
              <button className="button-preview-source" onClick={() => window.open('URL_FOR_PREVIEW', '_blank')}>Demo</button>
              <button className="button-preview-source" onClick={() => window.open('URL_FOR_SOURCE_CODE', '_blank')}>Source</button>
            </div>
          </div>
          <div className="project-image">
            <img className='image' src={project2Images[currentProjectImageIndexes.project3]} alt="Project 3" />
            <div>
              <button className='button-prev-next' onClick={() => handlePrevImage("project3")}>Previous</button>
              <button className='button-prev-next' onClick={() => handleNextImage("project3")}>Next</button>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-container">
          <div className="project-details">
            <h2>Mave Grocery Store</h2>
            <p className="description">
              Mave Grocery Store project is a web application where customers can experience the convenience of grocery shopping from the comfort of their homes. By creating a personalized account, users gain access to a vast array of products from fresh produce to cleaning supplies.
              <br></br>
              <br></br>
              Our user-friendly interface allows customers to browse through a catalog, add items to their cart and securely complete their purchases online. With simple navigation, secure payment options and timely delivery services, our web application redefines the way people shop for groceries, making it effortless, efficient, and enjoyable.
            </p>
            <div>
              <button className="button-preview-source" onClick={() => window.open('URL_FOR_PREVIEW', '_blank')}>Demo</button>
              <button className="button-preview-source" onClick={() => window.open('URL_FOR_SOURCE_CODE', '_blank')}>Source</button>
            </div>
          </div>
          <div className="project-image">
            <img className='image' src={project4Images[currentProjectImageIndexes.project4]} alt="Project 4" />
            <div>
              <button className='button-prev-next' onClick={() => handlePrevImage("project4")}>Previous</button>
              <button className='button-prev-next' onClick={() => handleNextImage("project4")}>Next</button>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="project-container">
          <div className="project-details">
            <h2>Eldr</h2>
            <p className="description">
              Eldr is a friendly app made for elderly people. It helps them talk to others, play games, and make new friends easily. The app is easy to use and makes seniors feel less lonely by connecting them with others.
              <br></br>
              <br></br>
              The Figma project and mockup website show how Eldr works, making it simple for everyone to understand its purpose: bringing happiness and friendship to older adults. Eldr is all about making seniors' lives better by connecting them with others in a fun and easy way.
            </p>
            <div>
              <button className="button-preview-source" onClick={() => window.open('URL_FOR_PREVIEW', '_blank')}>Demo</button>
              <button className="button-preview-source" onClick={() => window.open('URL_FOR_SOURCE_CODE', '_blank')}>Source</button>
            </div>
          </div>
          <div className="project-image">
            <img className='image' src={project5Images[currentProjectImageIndexes.project5]} alt="Project 5" />
            <div>
              <button className='button-prev-next' onClick={() => handlePrevImage("project5")}>Previous</button>
              <button className='button-prev-next' onClick={() => handleNextImage("project5")}>Next</button>
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
