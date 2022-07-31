import React from "react";

const IrSliderContent = ({ title, date }) => {
  return (
    <div className="IrSliderContent">
      <div className="IrDate">{date}</div>
      <div className="Irtitle">{title}</div>
    </div>
  );
};

export default IrSliderContent;
