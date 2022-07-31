import React from "react";
import { useNavigate } from "react-router-dom";
import "./sections/Nav.css";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <header className="Nav">
      <div className="Nav_Logo"  onClick={()=>navigate("/")} >MEDISON</div>
      <div className="Nav_Menu">
        <ul>
          <li>회사소개</li>
          <li onClick={() => navigate("/ir")}>IR</li>
          <li>인재채용</li>
        </ul>
      </div>
      <div className="Nav_Map">SITEMAP</div>
    </header>
  );
};

export default Nav;
