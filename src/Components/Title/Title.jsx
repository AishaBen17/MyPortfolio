import React from "react";
import "./Title.css";

const Title = ({ title }) => {
  return (
    <div className="title-container">
      <h1 className="title-text">{title}</h1>
    </div>
  );
};

export default Title;
