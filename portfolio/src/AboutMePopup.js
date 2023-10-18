import React from 'react';
import './AboutMePopup.css'; // Add styles for the popup in AboutMePopup.css
import image from './assets/vithu-image2.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';

const AboutMePopup = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="about-me-popup">
                <div className="popup-top"></div>
                <div className="popup-bottom">
                    <div className="portfolio-circle">
                        <img src={image} alt="Portfolio" className="portfolio-image" />
                    </div>
                    <h1 className="name" style={{ color: 'black', textAlign: 'center' }}>Vithushen Sivasubramaniam</h1>
                    <div class="container">
                        <div class="info">
                            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Expertise</p>
                            <p>Software Development</p>
                        </div>
                        <div class="info">
                            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Location</p>
                            <p>Montreal, QC</p>
                        </div>
                        <div class="info">
                            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Education</p>
                            <p>Bachelors, Software Engineering</p>
                        </div>
                        <div class="info">
                            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Graduation</p>
                            <p>June 2023</p>
                        </div>
                    </div>
                    <p className="description">
                        During my academic journey and personal projects, I have learned a lot in frontend and
                        backend development, particularly in React with proficiency in HTML, CSS, JavaScript, Java,
                        SQL and Node.js. I have a portfolio of user-friendly, responsive websites, showcasing my
                        dedication to creating user experiences on my github. Collaborating within teams of
                        various sizes, I have successfully worked on projects using Agile and Scrum methodologies,
                        demonstrating my ability to thrive in a collaborative, fast-paced environment.
                        <br></br>
                        <br></br>
                        What sets me apart is my commitment to continuous improvement. After completing my
                        projects, I actively seek feedback from peers and friends to enhance my work further. This
                        iterative process has not only refined my technical skills but also helped my growth and
                        adaptability.
                    </p>
                    <div className='logos'>
                        <a href="https://github.com/vithushen">
                            <img src={github} alt="github" className='github-logo' />
                        </a>
                        <a href="https://www.linkedin.com/in/vithushen-sivasubramaniam-8b35a4236/">
                            <img src={linkedin} alt="linkedin" className='linkedin-logo' />
                        </a>
                    </div>
                </div>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default AboutMePopup;