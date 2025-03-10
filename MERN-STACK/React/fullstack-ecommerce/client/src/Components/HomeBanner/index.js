import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HomeBanner = () => {
  return (
    <div className="container mt-3">
      <div className="homeBannerSection">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={false}
        >
          <SwiperSlide>
            <div className="item">
              <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt="" className="w-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="" className="w-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="https://www.w3schools.com/howto/img_lights_wide.jpg" alt="" className="w-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" alt="" className="w-100" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner;
