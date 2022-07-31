import React from "react";
import "./TitleImg.css";

const TitleImg = ({ title, type }) => {
  return (
    <div className={["TitleImg", `img_${type}`].join(" ")}>
      <h1>{title}</h1>
    </div>
  );
};

export default TitleImg;
