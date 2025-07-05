import React from "react";
import Services_Data from "./../../assets/services_data";
import Title from "../Title/Title";

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 scroll-mt-[100px] "
      data-aos="zoom-in-up"
    >
      <div className="container mx-auto px-6 max-w-6xl ">
        <Title title="My Services" />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {Services_Data.map((service, index) => {
            const Icon = service.s_icon;
            return (
              <div
                key={index}
                className="group flex flex-col justify-start items-center text-center min-h-[320px]
                 max-w-sm bg-gradient-to-br from-[#3f0b52] to-[#1e0127] rounded-2xl p-10 
                 shadow-[0_0_25px_#c471ed66] hover:shadow-[0_0_40px_#d3444eaa] transition-all duration-300 hover:-translate-y-1"
              >
             
                <Icon className="text-[#c471ed] text-6xl mb-5 transition-transform duration-300
                 group-hover:scale-110 group-hover:rotate-6" />

                {/* Title */}
                <h2 className="text-xl font-semibold text-white mb-3">
                  {service.s_name}
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed min-h-[120px] text-center">
                  {service.s_desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
