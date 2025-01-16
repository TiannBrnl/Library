import React from 'react';
import './About.css';
import team from '../../assets/team.png';
import openbook from '../../assets/openbook.png';
import binocular from '../../assets/binocular.png';
import handshake from '../../assets/handshake.png';

function About() {
    return (
        <section className="about-section" id='about-us'>
          <div className="about-container">
            <h1>About Us</h1>
            <div className="cards">
              <div className="card">
                <div className="card-icon">
                  <img src={openbook} alt="Our Mission" />
                </div>
                <h2>Our Mission</h2>
                <p>Welcome to E-Library System! We are dedicated to providing a comprehensive digital library experience. Our mission is to make knowledge accessible to everyone, everywhere.</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <img src={binocular} alt="Our Vision" />
                </div>
                <h2>Our Vision</h2>
                <p>With a vast collection of books, journals, and articles, we aim to support your learning and research needs through cutting-edge digital solutions.</p>
              </div>
            </div>
            <div className="cards">
              <div className="card">
                <div className="card-icon">
                  <img src={team} alt="Our Team" />
                </div>
                <h2>Our Team</h2>
                <p>Our team is passionate about education and technology, and we strive to continuously improve our platform to serve you better.</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <img src={handshake} alt="Our Promise" />
                </div>
                <h2>Our Promise</h2>
                <p>Thank you for choosing E-Library System as your go-to resource for all your reading and research needs. We're committed to your success.</p>
              </div>
            </div>
          </div>
        </section>
    );
}

export default About;