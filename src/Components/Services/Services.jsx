import React from "react";
import "./Services.css";
import Services_Data from "./../../assets/services_data";
import Title from "../Title/Title";

const Services = () => {
  return (
    <div id="services" className="services" data-aos="zoom-in-up">
      <Title title="My Services" />
      <div className="services-container">
        {Services_Data.map((service, index) => {
          const Icon = service.s_icon;
          return (
            <div key={index} className="services-format">
              <Icon className="service-icon" />
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
