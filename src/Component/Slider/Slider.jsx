import React from "react";
import "./Slider.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
const Slider = ({ devlopers }) => {
  console.log(devlopers);
  return (
    <div className="bodySlider">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {devlopers.map((el) => (
          <SwiperSlide className="slider">
            <div
              key={el.id}
              className="d-flex flex-column justify-content-center text-center info"
            >
              <div className="p-2">
                <img
                  src={el.image}
                  alt="personal"
                  width={100}
                  height={100}
                  className="rounded-circle"
                />
              </div>
              <div className="p-2 paraInfo">
                "Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live."
              </div>
              <div className="p-2 nameDev">{el.devloper}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
