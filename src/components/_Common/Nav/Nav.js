import React, { useState } from "react";
import "./sections/Nav.css";
import { useNavigate } from "react-router-dom";
import SiteMap from "./sections/SiteMap";
import Portal from "../../../Portal";

const Nav = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const openModal = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="Nav">
      <div className="Nav-Wrapper">
        <div className="navPage_Set" onClick={() => navigate("/")}>
          <h2>MEDISON</h2>
        </div>
        <div className="navPage_Set-list">
          <ul className="navPage_Set-listitems">
            <li
              className="list-item"
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <div
                className="list-link"
                onClick={() => navigate("/companyintroduce")}
              >
                회사소개
              </div>
              <section className="subBar_Set_one">
                <div className="subBar_Set-list">
                  <article
                    className="list_item"
                    onClick={() => navigate("/companyintroduce")}
                  >
                    소개
                  </article>
                  <article
                    className="list_item"
                    onClick={() => navigate("/companydirection")}
                  >
                    오시는길
                  </article>
                  <article
                    className="list_item"
                    onClick={() => navigate("/companyask")}
                  >
                    문의하기
                  </article>
                </div>
              </section>
            </li>
            <li
              className="list-item"
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <div onClick={() => navigate("/ir")} className="list-link">
                IR
              </div>
              <section className="subBar_Set_two">
                <div className="subBar_Set-list">
                  <article
                    onClick={() => navigate("/ir")}
                    className="list_item"
                  >
                    경영정보
                  </article>
                  <article
                    className="list_item"
                    onClick={() => navigate("/irnotice")}
                  >
                    주주 공지사항
                  </article>
                </div>
              </section>
            </li>
            <li
              className="list-item"
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <div className="list-link">인재채용</div>
              <section className="subBar_Set_three">
                <div className="subBar_Set-list">
                  <article className="list_item">인재상</article>
                  <article className="list_item">인사정책</article>
                  <article className="list_item">인재육성</article>
                  <article className="list_item">복리후생</article>
                  <article className="list_item">채용공고</article>
                </div>
              </section>
            </li>
          </ul>
        </div>
        <button className="navPage_siteMap-bnt" onClick={() => openModal(true)}>
          SITEMAP
        </button>
      </div>
      <div
        className={hover ? "sub_Background_true" : "sub_Background_false"}
      ></div>
      <Portal>{isShowing && <SiteMap closeModal={openModal} />}</Portal>
    </div>
  );
};

export default Nav;
