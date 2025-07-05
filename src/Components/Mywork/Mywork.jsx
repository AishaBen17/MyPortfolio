import React, { useState } from "react";
import Title from "../Title/Title";
import mywork_data from "./../../assets/mywork_data";
import { FaGithub } from "react-icons/fa";

const Mywork = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedWorks = showAll ? mywork_data : mywork_data.slice(0, 3);

  return (
    <section id="work" className="py-24 scroll-mt-32" data-aos="zoom-in-up">
      <div className="container mx-auto px-6 max-w-6xl ">
        <Title title="My Projects" />

        {/* Card */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {displayedWorks.map((work, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#3f0b52] to-[#1e0127] rounded-2xl shadow-[0_0_20px_#c471ed66] 
              hover:shadow-[0_0_35px_#d3444eaa] overflow-hidden flex flex-col w-full sm:max-w-sm transition duration-300 
              hover:-translate-y-1"
            >
              {/* Image Card*/}
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src={work.w_img}
                  alt={work.w_name}
                  className="w-full h-54 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content  */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <h3 className="text-xl font-semibold text-[#c471ed] mb-3">
                  {work.w_name}
                </h3>
                <p className="text-gray-300 text-sm mb-6 text-justify">
                  {work.w_desc}
                </p>

                {/* Button */}

                <div className="flex gap-3 justify-center sm:justify-between">
                  {/* Btn Live Demo */}
                  <a
                    href={work.w_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#c471ed] to-[#d3444e] text-white px-4 py-2 
                    rounded-full hover:from-[#d3444e] hover:to-[#c471ed] transition text-sm text-center w-1/2 sm:w-auto"
                  >
                    Live Demo
                  </a>

                  {/* Btn GitHub  */}
                  {work.w_github && (
                    <a
                      href={work.w_github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border-2 border-[#c471ed] text-[#c471ed] 
                      px-4 py-2 rounded-full hover:bg-white hover:text-purple-800 transition text-sm w-1/2 sm:w-auto"
                    >
                      <FaGithub className="text-lg" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Btn Learn More */}
        {mywork_data.length > 3 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-block border-2 border-[#c471ed] text-white px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-[#c471ed] hover:to-[#d3444e] hover:text-[#3f1952] transition text-lg font-semibold"
            >
              {showAll ? "Show Less" : "View More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Mywork;
