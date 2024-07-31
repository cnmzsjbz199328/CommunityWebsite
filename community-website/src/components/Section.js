import React from 'react';
import './Section.css'; // Importing CSS specific for Section

function Section({ title, description, imageLink }) {
    return (
        <div className="section">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imageLink} alt={title} />
        </div>
    );
}

export default Section;
