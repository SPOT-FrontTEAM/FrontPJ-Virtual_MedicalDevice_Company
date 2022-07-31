import axios from "axios";
import React, { useEffect, useState } from "react";
import IrSliderContent from "./IrSliderContent";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const IrContentsSlider = () => {
  const [contents, SetContents] = useState([]);

  useEffect(() => {
    fetchContentsData();
  }, []);
  const fetchContentsData = async () => {
    axios.get("/dummyData/IrBoardData.json").then((res) => {
      const sliceRes = res.data.slice(-9);
      const revRes = sliceRes.reverse();
      SetContents(revRes);
    });
  };
  return (
    <section className="IrContents">
      <div className="IrContentsWrapper"></div>
      <Swiper
        slidesPerView={3}
        slidesPerGroup={3}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Navigation]}
        className="IrSwiper"
      >
        {contents.map((content) => (
          <SwiperSlide className="IrSwiperContent" key={content.id}>
            <IrSliderContent title={content.title} date={content.date} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default IrContentsSlider;
