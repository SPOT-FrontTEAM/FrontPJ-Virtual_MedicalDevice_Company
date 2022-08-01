import React from "react";
import "./sections/Footer.css";

const Footer = () => {
  return (
    <div className="footerPage">
      <div className="footerPage_Set">
        <img alt="Logo" src="images/Logo.png" />
        <div className="footerPage_Set-text">
          개인정보처리방침 | 윤리경영 | 비즈니스 가이드 | 문의하기 | 아이디어 정책 <br></br>
          법인명 : 삼성메디슨 | 서울시 강동구 천호대로 1077 이스트센트럴타워 삼성메디슨 대표전화 02-2194-1000 | 서비스신청 1644-0550
            <div className="footerPage_Set-textin"> Copyright (c) 2017 Samsung Medison Co., Ltd. All Right Reserved </div>
        </div>
      </div>
      <div className="footerPage_Select">
        <select className="footerPage_Select-in">
          <option  value="Samsung">Samsung</option>
          <option  value="Samsung Healthcare">Samsung Healthcare</option>
          <option  value="Samsung Healthcare Vet">Samsung Healthcare Vet</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
