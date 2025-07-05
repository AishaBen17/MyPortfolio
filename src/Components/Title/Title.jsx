import React from "react";

const Title = ({ title }) => {
  return (
    <div className="text-center mb-10 font-heading">
      <h1 className="inline-block text-white text-3xl md:text-5xl font-bold px-8 py-4 rounded-[50px] bg-gradient-to-r from-[#c471ed] to-[#d3444e] shadow-lg">
        {title}
      </h1>
    </div>
  );
};

export default Title;
