import React from "react";
import "./Mywork.css";
import Title from "../Title/Title";
import mywork_data from "./../../assets/mywork_data";


const Mywork = () => {
  return (
    <div id="work" className="mywork" data-aos="zoom-in-up">
      <Title title="My Projects" />
      <div className="mywork-container">
        {mywork_data.map((Work, index) => (
          <a
            key={index}
            href={Work.w_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mywork-item"
          >
            <img src={Work.w_img} alt={Work.w_name} />
            <div className="mywork-overlay">
              <div className="mywork-button">View the full project</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Mywork;
