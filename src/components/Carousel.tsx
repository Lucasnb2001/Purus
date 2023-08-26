import { Swiper, SwiperSlide } from "swiper/react";
//import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        //navigation={true}
        //modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src={"../images/moda.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/eBooks.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/triploC.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_5.jpg"} alt="Carousel POR" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};

export default Carousel;