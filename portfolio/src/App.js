import React from 'react';
import './App.css';
import logo from './assets/logo.png'; // Replace with your logo file path
import vithuImage from './assets/vithu.png';

function App() {
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
            <button >SEE MY PROJECTS</button>
          </div>
        </div>
      </div>
      {/* Rest of your app content goes here */}
    </div>
  );
}

export default App;
