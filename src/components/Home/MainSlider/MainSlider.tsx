import * as React from 'react';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
// import React, { useRef, useState } from 'react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/effect-coverflow'
import slide_image_1 from "../../../assets/images/img_1.png";
// import slide_image_11 from "../../assets/images/img_11.png";
import slide_image_2 from "../../../assets/images/img_2.png";
import slide_image_3 from "../../../assets/images/img_3.png";
import slide_image_4 from "../../../assets/images/img_4.png";
import slide_image_5 from "../../../assets/images/img_5.png";
import { Typography } from '@mui/material';
// import slide_image_6 from "../../assets/images/img_6.png";
// import slide_image_7 from "../../assets/images/img_7.png";
import s from "./mainslider.module.css"

const MainSlider = () => {
  return (
    <>
      <div className={s.container}>

        <Typography variant="h5" ml={10} mb={5}>Вас вітає музей-майстерня Івана Кавалерідзе!</Typography>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={600}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 0,
          
            stretch: 0,
            depth: 150,
            modifier: 5,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className={s.mySwiper}
        // grabCursor={true}
        // slidesPerView={4}
        // spaceBetween={50}
        // effect={"coverflow"}
        // centeredSlides={true}
        // loop={true}
        // slidesPerView={"auto"}
        // coverflowEffect={{
        //   rotate: 0,
        //   stretch: 0,
        //   depth: 150,
        //   modifier: 2,
        //   slideShadows: true,
        // }}
        // pagination={{ el: ".swiper-pagination", clickable: true }}
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        //   clickable: true,
        // }}
        // modules={[EffectCoverflow, Pagination, Navigation]}
        // className="swiper_container"
      >
        <SwiperSlide className={s.swiper_slide}>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide}>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide}>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide}>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide}>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          {/* <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div> */}
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
        
</div>


      


       {/* <Swiper
        grabCursor={true}
        slidesPerView={"auto"}
        spaceBetween={600}
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 5,
          slideShadows: true,

        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[
          EffectCoverflow,
          Pagination,
          Navigation,

        ]}
        className={s.swiper}
        >
        <SwiperSlide className={s.swiper_slide}>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className={s.swiper_slide}>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className={s.swiper_slide}>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className={s.swiper_slide}>
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide  >
          <SwiperSlide className={s.swiper_slide}>
            <img src={slide_image_5} alt="slide_image" />
          </SwiperSlide> */}

          {/* <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div> */}
        {/* </Swiper> */}
    </>
  );
};

export default MainSlider;
