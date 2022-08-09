import React from "react";
import Divide from "../_Common/Divide";
import Greeting from "../_Common/Greeting";
import Nav from "../_Common/Nav/Nav";
import TitleImg from "../_Common/TilteImg/TitleImg";
import CompanyIntroduceList from "./sections/CompanyIntroduceList";
import "./sections/ExplainPage.css";

const CompanyIntroduce = () => {
  return (
    <div className="introducePage">
      <Nav />
      <TitleImg title="기업개요" type="Direction" />
      <CompanyIntroduceList />
      <Divide division="회사소개" section="기업개요" />
      <Greeting title="삼성메디슨" />
      <div className="introduce-back">
        <div className="introduce-back1img"></div>
        <div className="introduce-back2img"></div>
      </div>
      <p>
        삼성메디슨의 제품 및 관련 서비스 정보는{" "}
        <a href="https://www.samsunghealthcare.com/kr" target="blank">
          www.samsunghealthcare.com
        </a>{" "}
        에서 확인할 수 있습니다.
      </p>
    </div>
  );
};

export default CompanyIntroduce;
