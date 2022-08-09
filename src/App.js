import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import "swiper/css/bundle";
import "./components/LandingPage/sections/LandingPage.css";

//page
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/_Common/Footer/Footer";
import IrPage from "./components/IrPage/IrPage";
import CompanyDirections from "./components/ExplainPage/CompanyDirections";
import CompanyIntroduce from "./components/ExplainPage/CompanyIntroduce";
import History from "./components/ExplainPage/sections/History";
import Ideology from "./components/ExplainPage/sections/Ideology";
import Management from "./components/ExplainPage/sections/Management";
import Strategy from "./components/ExplainPage/sections/Strategy";
import CompanyAsk from "./components/ExplainPage/CompanyAsk";
import IrNoticePage from "./components/IrPage/IrNoticePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ir" element={<IrPage />} />
          <Route path="/companydirection" element={<CompanyDirections />} />
          <Route path="/companyintroduce" element={<CompanyIntroduce />} />
          <Route path="/history" element={<History />} />
          <Route path="/ideology" element={<Ideology />} />
          <Route path="/management" element={<Management />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/companyask" element={<CompanyAsk />} />
          <Route path="/irnotice" element={<IrNoticePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
