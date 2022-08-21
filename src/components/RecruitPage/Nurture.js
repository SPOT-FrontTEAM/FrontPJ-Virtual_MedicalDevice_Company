import React from "react";
import Divide from "../_Common/Divide";
import Greeting from "../_Common/Greeting";
import Nav from "../_Common/Nav/Nav";
import TitleImg from "../_Common/TilteImg/TitleImg";
import QuoteBox from "./sections/QuoteBox";
import nurture from "./../../utils/img/Recruit/Nurture.png";
import "./sections/RecruitPage.css";

const Nurture = () => {
  const title = "인재육성";
  const type = "Recruit";
  const section = "인재육성";
  const greeting = "인재육성이 삼성메디슨의 미래입니다.";
  const content =
    "삼성메디슨은 신입사원에서 임원에 이르기까지 각 직급에 따라 계층별 교육을 통해,필요한 역할 수행 능력을 배양하며,경영자가 될 인재를 적합한 다기능 전문인으로 양성하기 위해 계층별 리더 양성 교육을 실시합니다. 또한, 사이버 교육을 통해 다양한 분야의 소양과 역량을 강화시킬 수 있는 시스템을 통해 다양한 교육의 기회를 제공합니다.";

  return (
    <div className="Nurture">
      <Nav />
      <TitleImg title={title} type={type} />
      <Divide division={type} section={section} />
      <Greeting title={greeting} />
      <QuoteBox content={content} />
      <div className="NurtureContent">
        <h2>인재육성 목표</h2>
        <p>
          Global Competitiveness를 갖춘 Business Leader 및 직무별 최고의
          Specialist의 체계적인 양성
        </p>
        <img className="nurture" src={nurture} alr="nurture" />
      </div>
    </div>
  );
};

export default Nurture;
