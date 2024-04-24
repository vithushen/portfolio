import React from 'react';
import './AboutMePopup.css'; // Add styles for the popup in AboutMePopup.css
import image from './assets/vithu-image2.png';


const AboutMePopup = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="about-me-popup">
                <div className="popup-top"></div>
                <div className="popup-bottom">
                    <div className="portfolio-circle">
                        <img src={image} alt="Portfolio" className="portfolio-image" />
                    </div>
                    <h3 className="name" style={{ color: 'black', textAlign: 'center' }}>Vithushen Sivasubramaniam</h3>
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
                        After 5 years of programming, I have learned a lot in frontend and backend development, particularly in React with proficiency in HTML, CSS, JavaScript, Java, Python and SQL. I have a portfolio of user-friendly, responsive websites, showcasing my dedication to creating user experiences. Collaborating within teams of various sizes, I have successfully worked on projects using Agile and Scrum methodologies, demonstrating my ability to work in a collaborative and fast-paced environment using Github and Jira.
                        <br></br>
                        <br></br>
                        I have also received a certification in the Foundation of SRE from Wiley Edge Academy. This certification has equipped me with advanced skills in executing Production Support and Site Reliability Engineering responsibilities. Utilizing tools such as Kubernetes, Grafana, and Prometheus, I've gained experience in monitoring website performance to ensure optimal operation and reliability. Moreover, I've implemented automation strategies to reduce manual tasks and toil, thereby enhancing efficiency and reliability in website operations. Furthermore, I've developed robust testing procedures using Jenkins, automating testing processes to maintain code quality and reliability throughout the development lifecycle.                    </p>
                    <a href='https://www.credly.com/badges/5ebb5577-9f4b-41aa-b15d-284c36c9111c/public_url' target="_blank" rel="noopener noreferrer" style={{ fontSize: "20px" }}>Wiley Edge Certificate</a>
                </div>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default AboutMePopup;