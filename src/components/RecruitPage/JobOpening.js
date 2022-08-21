import React from "react";
import Divide from "../_Common/Divide";
import Nav from "../_Common/Nav/Nav";
import TitleImg from "../_Common/TilteImg/TitleImg";
import "./sections/RecruitPage.css";
import JobOpeningImg from '../../utils/img/JobOpening.png'
import JobOpeningContent from "./sections/JobOpeningContent";

const JobOpening = () => {
  const title = "인재상";
  const type = "Recruit";
  const section = "인사정책";

  return (
    <div className="JobOpening">
      <Nav />
      <TitleImg title={title} type={type} />
      <Divide division={type} section={section} />
      <img src={JobOpeningImg} alt="jobOpen" className="JobOpeningGreeting"/>
      <JobOpeningContent />
    </div>
  );
};

export default JobOpening;
