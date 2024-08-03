import React from 'react';
//import './AboutUs.css';
import SectionPictureLeft from '../section/SectionPictureLeft';

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>Learn more about who we are and what we do.</p>
      <SectionPictureLeft postIdphoto={1} postIdtext={8} />
    </div>
  );
}

export default AboutUs;

