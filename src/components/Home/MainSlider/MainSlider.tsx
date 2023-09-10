import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/effect-coverflow'
import slide_image_1 from "../../../assets/images/img_1.png";
import slide_image_2 from "../../../assets/images/img_2.png";
import slide_image_3 from "../../../assets/images/img_3.png";
import slide_image_4 from "../../../assets/images/img_4.png";
import slide_image_5 from "../../../assets/images/img_5.png";
import { Typography,Box } from '@mui/material';
import s from "./mainslider.module.css"




// interface ProfileType {
//   name: string
//   image: string
//   age: number | null
// }

// interface ProfilesProps {
//   profiles: Array<ProfileType>
// }

// function Profiles(props: ProfilesProps) {

// }



const MainSlider:FC = () => {
  return (
    <>
      <Box className={s.container}>
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
          <Box className="slider-controler">
          <Box className="swiper-pagination"></Box>
          </Box>
       </Swiper>
      </Box>
    </>
  );
};

export default MainSlider;
