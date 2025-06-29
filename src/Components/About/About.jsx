import React from "react";
import "./About.css";
import profile_img from "../../assets/about-img.png";
import Title from "../Title/Title";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaBootstrap,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <div id="about" className="about" data-aos="fade-up">
      <Title title="About Me" className="title" />
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a passionate Front-End Developer with a foundation in HTML,
              CSS, JavaScript, and React. I bring a unique mix of technical and
              soft skills thanks to my diverse background in secretarial work,
              content creation, and remote assistance.
            </p>

            <p>
              I believe in clean code, responsive design, and continuous
              learning. My journey has taken me from administrative roles to
              building full-featured web applications like online stores and
              hotel booking systems.
            </p>

            <p>
              I’m always eager to learn new technologies and contribute to
              meaningful projects.
            </p>
          </div>

          {/* Updated Skills Icons */}
          <div className="skills-icons">
            <div className="skill-icon">
              <FaHtml5 />
              <p>HTML5</p>
            </div>
            <div className="skill-icon">
              <FaCss3Alt />
              <p>CSS3</p>
            </div>
            <div className="skill-icon">
              <FaJs />
              <p>JavaScript</p>
            </div>
            <div className="skill-icon">
              <FaReact />
              <p>React</p>
            </div>
            <div className="skill-icon">
              <FaBootstrap />
              <p>Bootstrap</p>
            </div>
            <div className="skill-icon">
              <SiTailwindcss />
              <p>Tailwind css </p>
            </div>
            <div className="skill-icon">
              <FaNodeJs />
              <p>Node JS </p>
            </div>
            <div className="skill-icon">
              <FaGithub />
              <p>Github </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
