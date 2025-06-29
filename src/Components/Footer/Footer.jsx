import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo.png";
import footer_img from "../../assets/footer-img.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCopyright,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer" data-aos="zoom-in-up">
      <hr />
      <div className="footer-top">
        <div className="footer-info">
          <img src={footer_logo} alt="logo" className="footer-logo" />
          <p className="footer-description">
            From admin tasks to front-end code — I’ve turned my passion for tech
            into building beautiful, responsive websites using React and
            Tailwind CSS. Based in Egypt, always ready for remote opportunities!
          </p>
          <div className="footer-icons">
            <a
              href="https://github.com/AishaBen17"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:aish.ahmedben@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <img src={footer_img} alt="" />
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          Designed & coded with <FaHeart className="icon-re" /> by Aisha Ben{" "}
          <FaCopyright className="icon-re" /> 2025
        </p>
      </div>
    </div>
  );
};

export default Footer;
