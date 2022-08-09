import React from "react";
import Portal from "../../../Portal";

const IrPostContent = ({ closeModal, title, date, content }) => {
  return (
    <Portal>
      <div className="IrPC_BackGround">
        <div className="PC_Back"/>
        <div className="PostContent">
          <div className="PostClose">
            <button onClick={closeModal}>X</button>
          </div>
          <div className="PostHeader">
            <h2>{title}</h2>
            <h3>{date}</h3>
          </div>
          <p className="PostContentR">{content}</p>
        </div>
      </div>
    </Portal>
  );
};

export default IrPostContent;
