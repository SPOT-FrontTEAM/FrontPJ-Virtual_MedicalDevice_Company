import React from "react";
import "./LandingPage.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function LandingMainSection() {
  return (
      <div className="LadingPage">
        <Swiper
          className="landingSwiper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="slider">
            <div className="imageExplain">
            <h1 className="imageExplain-head">EleV8 to Excellence</h1>
            <div >Unifying intelligence and performance</div>
            <button className="landing_Set-bnt" onClick={() => window.open('https://samsunghealthcare.com/kr', '_blank')}>더보기</button>
            </div>
            <div className="sliderWrapper">
              <img
                alt="Slide1"
                src="images/main1.png"
                width={"100%"}
                height={"130%"}
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
          <div className="imageExplain">
          <h1 className="imageExplain-head">HERA W10</h1>
            <div >New Momentum of Imaging</div>
            <button className="landing_Set-bnt" onClick={() => window.open('https://samsunghealthcare.com/kr', '_blank')}>더보기</button>
            </div>
            <div className="sliderWrapper">
              <img
                alt="Slide1"
                src="images/main2.png"
                width={"100%"}
                height={"130%"}
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
          <div className="imageExplain-3">
          <h1 className="imageExplain-head">RS85 Prestige</h1>
            <div >A Revolutionary Change <br></br>in Advenced Diagnostics</div>
            <button className="landing_Set-bnt" onClick={() => window.open('https://samsunghealthcare.com/kr', '_blank')}>더보기</button>
            </div>
            <div className="sliderWrapper">
              <img
                alt="Slide1"
                src="images/main3.png"
                width={"100%"}
                height={"130%"}
              ></img>
            </div>
          </SwiperSlide>

          <div className="landingPage_Set-list">
            <ul className="landingPage_Set-listitems">
              <li>
                {" "}
                <img
                  className="list-image"
                  alt="list"
                  src="images/list1.png"
                  style={{ marginLeft: "45px", marginBottom: "10px" }}
                ></img>{" "}
                Ultrasound System{" "}
              </li>
              <li>
                {" "}
                <img
                  className="list-image"
                  alt="list"
                  src="images/list2.png"
                  style={{ marginLeft: "45px" }}
                ></img>
                Digital Radiography{" "}
              </li>
              <li>
                {" "}
                <img
                  alt="list"
                  className="list-image"
                  src="images/list3.png"
                ></img>
                Portable CT{" "}
              </li>
              <li>
                {" "}
                <img
                  className="list-image"
                  alt="list"
                  src="images/list4.png"
                ></img>
                고객 문의{" "}
              </li>
              <li>
                {" "}
                <img
                  className="list-image"
                  alt="list"
                  src="images/list5.png"
                ></img>
                서비스 문의{" "}
              </li>
            </ul>
          </div>
          <div className="connectNumber">
            대표번호 02-2194-1000 서비스번호 1644-0550
          </div>
        </Swiper>
      </div>
  );
}
