import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png'; // Replace with your logo file path
import vithuImage from './assets/vithu.png';
import nbaFantasy from './assets/nba-fantasy.png'
import Modal from './Modal';

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
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'Java', logo: javaLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'C++', logo: cppLogo },
    { name: 'Bootstrap', logo: bootstrapLogo },
    { name: 'React', logo: reactLogo },
    { name: 'SQL', logo: sqlLogo },
    { name: 'TypeScript', logo: typescriptLogo },
  ];

  return (
    <div className="background-container">
      <nav className="navbar">
        <div className="left-side">
          <img src={logo} alt="Logo" className="logo" />
          <span className="website-name">Vithushen Sivasubramaniam</span>
        </div>
        <div className="right-side">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
          <a href="#" className="nav-link">Portfolio</a>
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
            <p>I specialize in designing and developing websites using HTML5, CSS3, React, and JavaScript. With a passion for creating visually appealing and user-friendly interfaces, I bring innovative ideas to life through my coding expertise. </p>
          </div>
          <div className='buttonCss'>
            <button >HIRE ME</button>
            <a href="#projects"><button>VIEW PROJECTS</button></a>
          </div>
        </div>
      </div>
      <div className='skills' id='skills'>
        <h1 className='title'>My Skills</h1>
        <div className='skills-container'>
          {skills.map(skill => (
            <div key={skill.name} className='skill-item'>
              <img src={skill.logo} alt={skill.name} className='skill-logo' />
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
