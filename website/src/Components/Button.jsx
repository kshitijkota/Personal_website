// src/components/Button.jsx
import React from 'react';
import './Button.css'; // Create this file for any specific styling for the button

const Button = ({ text, onClick }) => {
    return (
    <button className="cta-button" onClick={onClick}>
        Projects →
    </button>
);
};

export default Button;
