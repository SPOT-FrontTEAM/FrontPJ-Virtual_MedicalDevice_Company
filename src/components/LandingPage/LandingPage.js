import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./sections/LandingPage.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import LandingExplainSection from "./sections/LadingExplainSection";
import LandingIrSection from "./sections/LandingIrSection";
import Nav from "../_Common/Nav/Nav";
import LandingMainSection from "./sections/LandingMainSection";
import LandingRecruitSection from "./sections/LandingRecruitSection";

export default function LandingPage() {
  const scroll = "<<<  Scrolling Area  >>>";
  return (
    <div className="LandingPage">
      <Nav />
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        // onReachEnd={() => {
        //   console.log("test");
        // }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="section_1">
          <LandingMainSection />
        </SwiperSlide>
        <SwiperSlide className="section_2">
          <LandingExplainSection />
        </SwiperSlide>
        <SwiperSlide className="section_3">
          <LandingIrSection />
        </SwiperSlide>
        <SwiperSlide className="section_4">
          <LandingRecruitSection />
        </SwiperSlide>
      </Swiper>
      <div className="footerScroll">
        <div className="scrollButton">{scroll}</div>
      </div>
    </div>
  );
}
