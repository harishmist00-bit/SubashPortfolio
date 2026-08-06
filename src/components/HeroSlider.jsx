import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

function HeroSlider() {
  return (
    <Swiper className="w-full h-[700px]">
  <SwiperSlide>
    <img
      src={banner1}
      alt="Banner 1"
      className="w-full h-full object-cover"
    />
  </SwiperSlide>

  <SwiperSlide>
    <img
      src={banner2}
      alt="Banner 1"
      className="w-full h-full object-cover"
    />
  </SwiperSlide>

  <SwiperSlide>
    <img
      src={banner3}
      alt="Banner 1"
      className="w-full h-full object-cover"
    />
  </SwiperSlide>

</Swiper>
  );
}

export default HeroSlider;