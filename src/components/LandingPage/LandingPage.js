import React from "react";
import Footer from "../_Common/Footer/Footer";
import Nav from "../_Common/Nav/Nav";
import "./sections/LandingPage.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LandingMainSection from "./sections/LandingMainSection";

export default function LandingPage() {
  return (
    <div>
      <Nav />
        <LandingMainSection/>

      <Footer />
    </div>
  );
}
