import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import "swiper/css/bundle";
import "./components/LandingPage/sections/LandingPage.css";

//page
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/_Common/Footer/Footer";
import IrPage from "./components/IrPage/IrPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ir" element={<IrPage />} />
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
