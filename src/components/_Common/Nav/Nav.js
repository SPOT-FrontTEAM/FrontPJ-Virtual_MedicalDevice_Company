import React from "react";
import "./sections/Nav.css";
import "./sections/SubBar";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="navPage-true">
      <div className="navPage_Set">
        <img alt="Logo" src="images/Logo1.png" onClick={() => navigate("/")} />
      </div>
      <div className="navPage_Set-list">
        <ul className="navPage_Set-listitems">
          <li>
            <a href="company">회사소개</a>
            <div className="subBar_Set">
              <ul className="subBar_Set-list">
                <li>
                  <a href="companyintroduce">소개</a>
                </li>
                <li>
                  <a href="companydirection">오시는길</a>
                </li>
                <li>
                  <a href="company">문의하기</a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a href="ir" onClick={() => navigate("/ir")}>
              IR
            </a>
            <div className="subBar_Set">
              <ul className="subBar_Set-list">
                <li>
                  <a href="ir">경영정보</a>
                </li>
                <li>
                  <a href="ir">주주 공지사항</a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a href="recruit">인재채용</a>
            <div className="subBar_Set">
              <ul className="subBar_Set-list">
                <li>
                  <a href="recruit">인재상</a>
                </li>
                <li>
                  <a href="recruit">인사정책</a>
                </li>
                <li>
                  <a href="recruit">인재육성</a>
                </li>
                <li>
                  <a href="recruit">복리후생</a>
                </li>
                <li>
                  <a href="recruit">채용공고</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <button className="navPage_siteMap-bnt">SITEMAP</button>
    </div>
  );
};

export default Nav;
