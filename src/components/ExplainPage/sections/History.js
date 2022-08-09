import React from "react";
import Nav from "../../_Common/Nav/Nav";
import TitleImg from "../../_Common/TilteImg/TitleImg";
import Divide from "../../_Common/Divide";
import CompanyIntroduceList from "./CompanyIntroduceList";

const History = () => {
  return (
    <div>
      <Nav />
      <TitleImg title="연혁" type="Direction" />
      <CompanyIntroduceList />
      <Divide division="회사소개" section="연혁" />
      <div className="history-back">
        <div className="history-back1img"></div>
        <div className="history-back2img"></div>
        <div className="history-back3img"></div>
      </div>
    </div>
  );
};

export default History;
