import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png'; // Replace with your logo file path
import vithuImage from './assets/vithu.png';
import nbaFantasy from './assets/nba-fantasy.png'
import Modal from './Modal';
import AboutMePopup from './AboutMePopup';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAboutMePopupOpen, setIsAboutMePopupOpen] = useState(false);

  const openAboutMePopup = () => {
    setIsAboutMePopupOpen(true);
  };

  const closeAboutMePopup = () => {
    setIsAboutMePopupOpen(false);
  };

  const projects = [
    {
      id: 1,
      image: nbaFantasy,
      title: 'NBA Fantasy Helper',
      description: 'NBA Fantasy Draft Helper is your ultimate companion for building a winning fantasy basketball team! This innovative project brings together the power of data and user-friendly design, providing NBA enthusiasts with a comprehensive tool to make the best decisions during their fantasy drafts.',
      link: 'vithushen.github.io/NBA-Fantasy-Helper/'
    },
    {
      id: 2,
      image: nbaFantasy,
      title: 'Blackjack Counter',
      description: 'Welcome to the Blackjack Card Counter Tracker! This web application is designed to help players keep track of the cards in a blackjack game with multiple decks. The deck consists of 316 cards, representing 6 decks of standard playing cards.',
      link: 'vithushen.github.io/NBA-Fantasy-Helper/'
    },

    // Add more project objects as needed
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
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
            <h1>I Am a Web Developer</h1>
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
        <h1 className='title'>My Skills</h1>
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
        <h1 className='title'>My Personal Projects</h1>
        <div>
          {projects.map(project => (
            <img
              key={project.id}
              className='project-logos'
              src={project.image}
              alt={project.title}
              onClick={() => openModal(project)}
            />
          ))}
        </div>
      </div>
      {isModalOpen && selectedProject && (
        <Modal
          title={selectedProject.title}
          description={selectedProject.description}
          link={selectedProject.link}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
