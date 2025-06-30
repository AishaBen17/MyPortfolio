import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import resumePDF from "../../assets/Aisha-Resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-img-container">
        <img src={profile_img} alt="profile" className="hero-img" />
      </div>
      <h1>
        <span>Hi, I'm Aisha Ben,</span> Front-End Developer
      </h1>
      <p>
        Creative and adaptable Front-End Developer with a passion for building
        clean, modern, and responsive interfaces using React, JavaScript, and
        Tailwind CSS.
      </p>
      <div className="hero-action">
        <AnchorLink href="#contact" className="hero-connect">
          Contact Me
        </AnchorLink>
        <a href={resumePDF} className="hero-resume" download>
          My Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
