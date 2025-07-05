import React from "react";
import footer_logo from "../../assets/logo.png";
import footer_img from "../../assets/footer-img.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="text-gray-300 py-10" data-aos="zoom-in-up">

      {/*  Line 1 */}
      <div className="w-full mb-6">
        <hr className="mx-auto w-3/4 border-0 h-[1px] rounded bg-gray-300" />{" "}
      </div>

      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Image */}
        <div className="flex justify-center md:justify-center">
          <img
            src={footer_img}
            alt="footer"
            className="w-[260px] md:w-[320px]"
          />
        </div>

        {/* Content */}

        <div className="text-center md:text-left space-y-4">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img src={footer_logo} alt="logo" className="w-24" />{" "}
          </div>
          {/* النص */}
          <p className="text-base max-w-lg mx-auto md:mx-0 leading-relaxed">
            Creative and adaptable Front-End Developer with a passion for
            building clean, modern, and responsive interfaces using cutting-edge
            technologies.
          </p>
          {/* Icons*/}
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a
              href="https://github.com/AishaBen17"
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-full p-3 shadow-md hover:bg-[#c471ed]/20 transition duration-300"
            >
              <FaGithub className="text-[#c471ed]" />
            </a>
            <a
              href="https://www.linkedin.com/in/aisha-ahmed-429762217/"
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-full p-3 shadow-md hover:bg-[#c471ed]/20 transition duration-300"
            >
              <FaLinkedin className="text-[#c471ed]" />
            </a>
            <a
              href="mailto:aisha.ahmedben@gmail.com"
              className="bg-white rounded-full p-3 shadow-md hover:bg-[#c471ed]/20 transition duration-300"
            >
              <FaEnvelope className="text-[#c471ed]" />
            </a>
          </div>
        </div>
      </div>

      {/* Line 2 */}
      <div className="w-full my-6">
        <hr className="mx-auto w-3/4 border-0 h-[1px] rounded bg-gray-300" />{" "}
      </div>
      <div className="text-center text-white text-sm">
        <p className="flex justify-center items-center gap-2 flex-wrap">
          Designed & coded with <FaHeart className="text-red-500" /> by Aisha
          Ben
          <span className="flex items-center gap-1">
            <FaCopyright /> 2025
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
