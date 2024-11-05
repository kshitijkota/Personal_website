import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import Button from '../Components/Button';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons
import './HomePage.css';

const HomePage = () => {
    return (
    <div className="home-container">
        <h1>Hi, I'm Kshitij Koushik Kota,</h1>
        <Typed
        className="typed-text"
        strings={[
            "I'm a student at PES University",
            "I'm a cybersecurity enthusiast",
            "I'm an ML enthusiast",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
        />
        <Button />

        <div className="social-links">
        <a href="https://github.com/kshitijkota" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/kshitijkota/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
        </a>
        <a href="mailto:kshitijkota22@gmail.com">
            <FaEnvelope size={30} />
        </a>
        </div>

        <div className="background-shapes">
        <div className="circle"></div>
        <div className="circle small"></div>
        <div className="circle large"></div>
        </div>
    </div>
    );
};

export default HomePage;
