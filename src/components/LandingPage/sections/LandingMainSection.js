import React from "react";
import "./LandingPage.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LandingPageSetList from "./LandingPageSetList";

export default function LandingMainSection() {
  return (
    <div className="LandingMainSection">
      <Swiper
        className="landingSwiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="slider mainSl_1">
          <div className="sliderWrapper">
            <div className="imageExplain">
              <h1 className="imageExplain-head">EleV8 to Excellence</h1>
              <div>Unifying intelligence and performance</div>
              <button
                className="landing_Set-bnt"
                onClick={() =>
                  window.open("https://samsunghealthcare.com/kr", "_blank")
                }
              >
                더보기
              </button>
            </div>
            <LandingPageSetList />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider mainSl_2">
          <div className="sliderWrapper">
            <div className="imageExplain">
              <h1 className="imageExplain-head">HERA W10</h1>
              <div>New Momentum of Imaging</div>
              <button
                className="landing_Set-bnt"
                onClick={() =>
                  window.open("https://samsunghealthcare.com/kr", "_blank")
                }
              >
                더보기
              </button>
            </div>
            <LandingPageSetList />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider mainSl_3">
          <div className="sliderWrapper">
            <div className="imageExplain-3">
              <h1 className="imageExplain-head">RS85 Prestige</h1>
              <div>
                A Revolutionary Change <br></br>in Advenced Diagnostics
              </div>
              <button
                className="landing_Set-bnt"
                onClick={() =>
                  window.open("https://samsunghealthcare.com/kr", "_blank")
                }
              >
                더보기
              </button>
            </div>
            <LandingPageSetList />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
