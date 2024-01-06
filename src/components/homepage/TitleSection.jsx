import React from "react";

const TitleSection = ({ title, description }) => {
  return (
    <div className="flex gap-3 items-center my-10">
      <div className="text-white">
        <p className="text-2xl md:text-5xl font-bold">{title}</p>
        <p className="text-xs md:text-sm">{description}</p>
      </div>
      <div className="w-full border-primary border-b border-dashed"></div>
    </div>
  );
};

export default TitleSection;
