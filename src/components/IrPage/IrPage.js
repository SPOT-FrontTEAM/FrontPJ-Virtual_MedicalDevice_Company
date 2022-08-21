import React from "react";
import Divide from "../_Common/Divide";
import Greeting from "../_Common/Greeting";
import Nav from "../_Common/Nav/Nav";
import TitleImg from "../_Common/TilteImg/TitleImg";
import IrContents from "./sections/IrContents";
import "./sections/IrPage.css";

const IrPage = () => {
  const title = "기업 개요";
  const type = "Ir";
  const section = "인사정책";
  const divideType = "management";
  const greeting = "공시 및 공고";


  return (
    <div className="IrPage">
      <Nav />
      <TitleImg title={title} type={type} />
      <div className="IrWrapper">
        <Divide division={type} section={section} />
        <Greeting title={greeting} />
        <IrContents type={divideType} />
      </div>
    </div>
  );
};

export default IrPage;
