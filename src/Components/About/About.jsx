import React from "react";
import profile_img from "../../assets/about-img.png";
import Title from "../Title/Title";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const techStack = [
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaCss3Alt />, label: "CSS3" },
  { icon: <FaJs />, label: "JavaScript" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaBootstrap />, label: "Bootstrap" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <FaGithub />, label: "GitHub" },
];

const About = () => {
  return (
    <section id="about" className="py-24 text-gray-300 scroll-mt-32">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title */}
        <Title title="About Me" />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mt-14">
          {/* Left - Image (1/3) */}
          <div className="flex justify-center md:justify-center">
            <img
              src={profile_img}
              alt="Profile"
              className="w-[350px] md:w-[350px]"
            />
          </div>

          {/* Right - Content (2/3) */}
          <div className="md:col-span-2 space-y-8">
            {/* Paragraphs */}
            <div className="space-y-5 text-lg leading-relaxed text-justify">
              <p>
                I'm a passionate Front-End Developer with a foundation in HTML,
                CSS, JavaScript, and React. I bring a unique mix of technical
                and soft skills thanks to my diverse background in secretarial
                work, content creation, and remote assistance.
              </p>
              <p>
                I believe in clean code, responsive design, and continuous
                learning. My journey has taken me from administrative roles to
                building full-featured web applications.
              </p>
              <p>
                I’m always eager to learn new technologies and contribute to
                meaningful projects.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-6 justify-center">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-[#c471ed] hover:text-[#e87fff] text-3xl transition-transform transform hover:scale-110"
                >
                  <div className="p-4 bg-white rounded-full shadow-lg">
                    {tech.icon}
                  </div>
                  <p className="text-sm mt-2 text-gray-300">{tech.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
