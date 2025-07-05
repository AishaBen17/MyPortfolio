import React from "react";
import profile_img from "../../assets/profile_img.png";
import resumePDF from "../../assets/Aisha-Resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-24 gap-16 scroll-mt-24"
    >
      {/* Image*/}
      <div className="flex-1 flex justify-end">
        <div className="w-56 h-56 md:w-80 md:h-80 rounded-full bg-custom-gradient p-[6px] shadow-[0_0_30px_#c471ed88]">
          <img
            src={profile_img}
            alt="profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Content*/}
      <div className="flex-[1.5] text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight flex items-center justify-center md:justify-start gap-3">
          <span className="animate-wave">👋</span>
          <span className="bg-text-gradient bg-clip-text text-transparent">
            I'm Aicha Ben,
          </span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-[#c471ed]">
          Front-End Developer
        </h2>

        <p className="text-gray-300 text-lg max-w-xl text-justify mx-auto md:mx-0 leading-relaxed">
          From admin tasks to front-end code, I’ve turned my passion for tech
          into building beautiful, responsive websites. Always ready for remote
          opportunities!
        </p>
       

        <div className="flex flex-row flex-wrap justify-center md:justify-start gap-4 pt-4">
          <AnchorLink
            href="#contact"
            className="px-8 py-4 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-[#c471ed]
             to-[#d3444e] hover:from-[#d3444e] hover:to-[#c471ed] transition"
          >
            Contact Me
          </AnchorLink>
          <a
            href={resumePDF}
            download
            className="border-2 border-[#c471ed] text-white px-8 py-4 rounded-full text-lg hover:bg-gradient-to-r 
            hover:from-[#c471ed] hover:to-[#d3444e] transition font-semibold"
          >
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
