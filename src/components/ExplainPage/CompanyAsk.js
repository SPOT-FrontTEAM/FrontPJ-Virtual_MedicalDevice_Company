import React from "react";
import Divide from "../_Common/Divide";
import Nav from "../_Common/Nav/Nav";
import TitleImg from "../_Common/TilteImg/TitleImg";
import Greeting from "../_Common/Greeting";
import CompanyIntroduceList from "./sections/CompanyIntroduceList";
import "./sections/ExplainPage.css";
import AskContents from "./sections/AskContents";
const CompanyAsk = () => {
  return (
    <div>
      <Nav />
      <TitleImg title="문의하기" type="Direction" />
      <CompanyIntroduceList />
      <Divide division="회사소개" section="문의하기" />
      <Greeting title="삼성메디슨 홈페이지를 방문해 주셔서 감사합니다." />
      <div className="ask-back">
        <div className="ask-back1img"></div>
      </div>
      <div className="askList">
        <AskContents title="IR 문의" contents="Irddddd" />
        <AskContents title="IR 문의" contents="Irddddd" />
        <AskContents title="IR 문의" contents="Irddddd" />
      </div>
    </div>
  );
};

export default CompanyAsk;
