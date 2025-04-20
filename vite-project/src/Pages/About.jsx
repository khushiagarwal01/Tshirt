import React from 'react';
import './About.css';
import Tshirt4 from '../assets/Tshirt4.jpg';

const About = () => {
  return (
    <div className="about-main">
      <div className="about-heading-center">
        <p className="top-tagline">A Few Words</p>
        <h1 className="main-heading">ABOUT US</h1>
      </div>

      <div className="about-content">
        <div className="about-left">
          <h2 className="our-story-title">Our Story</h2>
          <p className="our-story-description">
            OUR STORY IS ONE OF <span className="sp"> PASSION, PERSEVERENCE, AND COMMITMENT.</span>
          </p>
          <p className="about-caption">
            Our journey began when a group of dedicated individuals, fueled by a shared love for exceptional deals and unmatched savings, came together to create a shopping experience like no other.
          </p>
        </div>

        <div className="about-right">
          <img src={Tshirt4} alt="About" className="about-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
