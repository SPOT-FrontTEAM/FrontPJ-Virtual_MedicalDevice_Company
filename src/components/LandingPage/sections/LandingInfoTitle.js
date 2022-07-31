import React from "react";

const LandingInfoTitle = ({ title, content }) => {
  return (
    <div className="LandingInfoTitle">
      <h1>{title}</h1>
      <div className="inFoDivisionLine" />
      <h3>{content}</h3>
    </div>
  );
};

export default LandingInfoTitle;
