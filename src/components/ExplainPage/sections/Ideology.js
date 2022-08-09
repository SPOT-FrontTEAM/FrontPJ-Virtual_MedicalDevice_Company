import React from "react";
import Nav from "../../_Common/Nav/Nav";
import TitleImg from "../../_Common/TilteImg/TitleImg";
import Divide from "../../_Common/Divide";
import CompanyIntroduceList from "./CompanyIntroduceList";

const Ideology = () => {
  return (
    <div>
      <Nav />
      <TitleImg title="경영이념 및 핵심가치" type="Direction" />
      <CompanyIntroduceList />
      <Divide division="회사소개" section="경영이념 및 핵심가치" />
      <div className="ideology-back">
        <div className="ideology-back1img"></div>
        <div className="ideology-back2img"></div>
        <div className="ideology-back3img"></div>
      </div>
    </div>
  );
};

export default Ideology;
