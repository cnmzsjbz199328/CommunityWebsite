import React from 'react';
//import './AboutUs.css';
import SectionPictureLeft from '../section/SectionPictureLeft';
import SectionPictureRight from '../section/SectionPictureRight';

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>Learn more about who we are and what we do.</p>
      <SectionPictureLeft postIdphoto={1} postIdtext={8} />
      <SectionPictureRight postIdphoto={2} postIdtext={37} />
    </div>
  );
}

export default AboutUs;

