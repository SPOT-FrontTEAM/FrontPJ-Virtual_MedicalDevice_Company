import { React, useState } from "react";
import "./ExplainPage.css";
import Portal from "./../../../Portal";
import AskModal from "./AskModal";

function AskContents({ i, title, contents }) {
  const [isShowing, setIsShowing] = useState(false);
  const openModal = () => {
    console.log(`이전 ${isShowing}`);
    setIsShowing(!isShowing);
    console.log(`이후 ${isShowing}`);
  };

  return (
    <div className="askContents" onClick={() => openModal()}>
      <div className={["askImg", `img_${i}`].join(" ")}></div>
      <h2>{title}</h2>
      <div className="explain">
        {contents} 궁금하신 사항에 대해 <br></br>문의하세요
      </div>
      <Portal>
        {isShowing && <AskModal title={title} close={openModal} />}
      </Portal>
    </div>
  );
}

export default AskContents;
