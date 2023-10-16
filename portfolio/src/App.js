import React, { useState } from 'react';
import './App.css';
import vithuImage from './assets/vithu.png';
import AboutMePopup from './AboutMePopup';
import eldr from './assets/eldr.png';
import fantasy from './assets/fantasy_nba.png';
import datum from './assets/datum_monitor.png';
import covidex from './assets/covidex.png';


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

function App() {
  const [isAboutMePopupOpen, setIsAboutMePopupOpen] = useState(false);

  const openAboutMePopup = () => {
    setIsAboutMePopupOpen(true);
  };

  const closeAboutMePopup = () => {
    setIsAboutMePopupOpen(false);
  };




  const skills = [
    { name: 'HTML', logo: htmlLogo, link: 'https://www.w3schools.com/html/default.asp' },
    { name: 'CSS', logo: cssLogo, link: 'https://www.w3schools.com/css/default.asp' },
    { name: 'JavaScript', logo: javascriptLogo, link: 'https://www.w3schools.com/js/default.asp' },
    { name: 'Java', logo: javaLogo, link: 'https://www.w3schools.com/java/default.asp' },
    { name: 'Python', logo: pythonLogo, link: 'https://www.w3schools.com/python/default.asp' },
    { name: 'C++', logo: cppLogo, link: 'https://www.w3schools.com/cpp/default.asp' },
    { name: 'Bootstrap', logo: bootstrapLogo, link: 'https://www.w3schools.com/bootstrap/default.asp' },
    { name: 'React', logo: reactLogo, link: 'https://www.w3schools.com/react/default.asp' },
    { name: 'SQL', logo: sqlLogo, link: 'https://www.w3schools.com/sql/default.asp' },
    { name: 'TypeScript', logo: typescriptLogo, link: 'https://www.w3schools.com/typescript/index.php' },
  ];

  return (
    <div className="background-container">
      <nav className="navbar">
        <div className="left-side">
          <span className="website-name">Vithushen Sivasubramaniam</span>
        </div>
      </nav>
      <div className="flex-container">
        <img src={vithuImage} alt="vithuImage" className="vithuImageF" />
        <div className="text-content">
          <div className='h1'>
            <h1>WELCOME!</h1>
            <h1>I Am a Software Engineer</h1>
          </div>
          <div className='p'>
            <p>I specialize in designing and developing websites using HTML5, CSS3, React and JavaScript. With a passion for creating visually appealing and user-friendly interfaces, I bring innovative ideas to life through my coding expertise. </p>
          </div>
          <div className='buttonCss'>
            <button onClick={openAboutMePopup}>About Me</button>
            <a href="#projects"><button>View Projects</button></a>
          </div>

          {isAboutMePopupOpen && (
            <AboutMePopup onClose={closeAboutMePopup} />
          )}
        </div>
      </div>
      <div className='skills' id='skills'>
        <h1 className='title' style={{ fontSize: '50px' }}>My Skills</h1>
        <div className='skills-container'>
          {skills.map(skill => (
            <div key={skill.name} className='skill-item'>
              <a href={skill.link} target="_blank" rel="noopener noreferrer" >
                <img src={skill.logo} alt={skill.name} className='skill-logo' />
              </a>
              <p className='skill-name'>{skill.name}</p>

            </div>
          ))}
        </div>
      </div>
      <div className='projects' id='projects'>
        <h1 className='title' style={{ fontSize: '50px' }}>My Project</h1>
        <div className='project-container'>
          <div className='image-container'>
            <img src={datum} alt='Project' className='fantasy-image' />
          </div>
          <div className='project-details'>
            <h1 className='title' style={{ textAlign: "center" }}>datum.io</h1>
            <p className='description' style={{ color: "white", textAlign: 'left' }}>The purpose of this project is to design a mobile application to allow researchers to collect data for a specific study that encourages repeated engagement through gamification.</p>
            <p className='description' style={{ color: "white", textAlign: 'left' }}>A user-centered approach will be applied to encourage usability and engagement. The application would be usable for a variety of different research studies (e.g. mental health studies, product engagement studies, etc.). Hence, it could be used in a wide array of fields.</p>
            <div>
              <button className='preview' onClick={() => { window.location.href = 'https://datum-io.app/user/dashboard'; }}>
                Preview
              </button>
              <button className='source'>Source</button>
            </div>
          </div>
        </div>
        <div className='project-container'>
          <div className='project-details'>
            <h1 className='title' style={{ textAlign: "center" }}>Covidex</h1>
            <p className='description' style={{ color: "white", textAlign: 'left' }}>Covidex is a covid-19 tracking application designed for multiple users such as common patients, doctors, health officials and and immigration officials. Its goal is to help us deal with the reality of the situation we currently face and try to move forward.</p>
            <p className='description' style={{ color: "white", textAlign: 'left' }}>Patients would be able to upload their health status details onto the platform. This in turn would be monitored by both doctors and health officials to both help the patients as well as track the progress of the virus. We would be able to monitor daily cases and get a better understanding of how the virus is changing to help mitigate the risks for the rest of the population.</p>
            <div>
              <button className='preview' onClick={() => { window.location.href = 'https://covidex.live/'; }}>
                Preview
              </button>
              <button className='source'>Source</button>
            </div>
          </div>
          <div className='second-container'>
            <img src={covidex} alt='Project' className='eldr-image' />
          </div>
        </div>
        <div className='project-container'>
          <div className='image-container'>
            <img src={fantasy} alt='Project' className='fantasy-image' />
          </div>
          <div className='project-details'>
            <h1 className='title' style={{ textAlign: "center" }}>NBA Fantasy Helper</h1>
            <p className='description' style={{ color: "white", textAlign: 'left' }}>NBA Fantasy Draft Helper is your ultimate companion for building a winning fantasy basketball team! This innovative project brings together the power of data and user-friendly design, providing NBA enthusiasts with a comprehensive tool to make the best decisions during their fantasy drafts.</p>
            <p className='description' style={{ color: "white", textAlign: 'left' }}>NBA Stats Explorer simplifies the process of understanding player performance by offering a visually appealing and easy-to-navigate platform. Whether you're a fantasy basketball enthusiast, a sports analyst, or just a passionate NBA fan, this tool provides a unique perspective on player capabilities, fostering a deeper appreciation for the game.</p>
            <div>
              <button className='preview' onClick={() => { window.location.href = 'https://vithushen.github.io/NBA-Fantasy-Helper/'; }}>
                Preview
              </button>
              <button className='source'>Source</button>
            </div>
          </div>
        </div>
        <div className='project-container'>
          <div className='project-details'>
            <h1 className='title' style={{ textAlign: "center" }}>Eldr</h1>
            <p className='description' style={{ color: "white", textAlign: 'left' }}>Eldr is a friendly app made for elderly people. It helps them talk to others, play games, and make new friends easily. The app is easy to use and makes seniors feel less lonely by connecting them with others.</p>
            <p className='description' style={{ color: "white", textAlign: 'left' }}>The Figma project and mockup website show how Eldr works, making it simple for everyone to understand its purpose: bringing happiness and friendship to older adults. Eldr is all about making seniors' lives better by connecting them with others in a fun and easy way.</p>
            <div>
              <button className='preview' onClick={() => { window.location.href = 'https://www.figma.com/proto/AeMKmKMeebpAjkK44w4yGK/Soen-357-Mini-Project?node-id=39-689&starting-point-node-id=39%3A590'; }}>
                Preview
              </button>
              <button className='source'>Source</button>
            </div>
          </div>
          <div className='second-container'>
            <img src={eldr} alt='Project' className='eldr-image' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
