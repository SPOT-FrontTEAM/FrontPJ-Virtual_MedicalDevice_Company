import React from "react";
import aptpUP from "./../../../utils/img/aptpUP.png"
import aptpDOWN from "./../../../utils/img/aptpDOWN.png"

const QuoteBox = ({content}) => {
  return (
    <div className="QuoteBox">
      <img src={aptpUP} alt="up" />
      <p>{content}</p>
      <img src={aptpDOWN} alt="down" />
    </div>
  );
};

export default QuoteBox;
