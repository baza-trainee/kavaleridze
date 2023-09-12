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
import slide_image_6 from "../../../assets/images/img_1_mobil.png";
import slide_image_7 from "../../../assets/images/img_2_mobil.png";
import slide_image_8 from "../../../assets/images/img_3_mobil.png";
import slide_image_9 from "../../../assets/images/img_4_mobil.png";
import slide_image_10 from "../../../assets/images/img_5_mobil.png";
import slide_image_11 from "../../../assets/images/img_1_tablet.png";
import slide_image_12 from "../../../assets/images/img_2_tablet.png";
import slide_image_13 from "../../../assets/images/img_3_tablet.png";
import slide_image_14 from "../../../assets/images/img_4_tablet.png";
import slide_image_15 from "../../../assets/images/img_5_tablet.png";
import { Typography,Box } from '@mui/material';
import s from "./mainslider.module.css"





{/* <picture>
  <source media="(min-width: 1200px)"
    srcset="./img/team/team-1-desktop.webp 1x, 
                        ./img/team/team-1-desktop@2x.webp 2x"
    type="image/webp">
    <source media="(min-width: 768px)"
      srcset="./img/team/team-1-tablet.webp 1x, 
                        ./img/team/team-1-tablet@2x.webp 2x"
      type="image/webp">
      <source media="(min-width: 250px)"
        srcset="./img/team/team-1.webp 1x, 
                        ./img/team/team-1@2x.webp 2x"
        type="image/webp">

        <source media="(min-width: 1200px)"
          srcset="./img/team/team-1-desktop.jpg 1x, 
                        ./img/team/team-1-desktop@2x.jpg 2x">
          <source media="(min-width: 768px)"
            srcset="./img/team/team-1-tablet.jpg 1x, 
                        ./img/team/team-1-tablet@2x.jpg 2x">
            <source media="(min-width: 250px)"
              srcset="./img/team/team-1.jpg 1x, 
                        ./img/team/team-1@2x.jpg 2x">

              <img
                src="./img/team/team-1.jpg"
                alt="Дизайнер"
                loading="lazy">
              </picture> */}




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
          // pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className={s.mySwiper}
      >
          <SwiperSlide className={s.swiper_slide}>
            <picture>
              <source media="(max-width: 320px)"
                srcset={slide_image_6}
                type="image/webp">
              </source>
              <source media="(max-width: 768px)"
                srcset={slide_image_11}
                type="image/webp">
              </source>
              <img src={slide_image_1} alt="slide_image" />
            </picture>
              {/* <img src={slide_image_1} alt="slide_image" /> */}
            </SwiperSlide>
          <SwiperSlide className={s.swiper_slide}>
            <picture>
              <source media="(max-width: 320px)"
                srcset={slide_image_7}
                type="image/webp">
              </source>
              <source media="(max-width: 768px)"
                srcset={slide_image_12}
                type="image/webp">
              </source>
              <img src={slide_image_2} alt="slide_image" />
            </picture>
              {/* <img src={slide_image_2} alt="slide_image" /> */}
          </SwiperSlide>
          <SwiperSlide className={s.swiper_slide}>
            <picture>
              <source media="(max-width: 320px)"
                srcset={slide_image_8}
                type="image/webp">
              </source>
              <source media="(max-width: 768px)"
                srcset={slide_image_13}
                type="image/webp">
              </source>
              <img src={slide_image_3} alt="slide_image" />
            </picture>
              {/* <img src={slide_image_3} alt="slide_image" /> */}
            </SwiperSlide>
          <SwiperSlide className={s.swiper_slide}>
            <picture>
              <source media="(max-width: 320px)"
                srcset={slide_image_9}
                type="image/webp">
              </source>
              <source media="(max-width: 768px)"
                srcset={slide_image_14}
                type="image/webp">
              </source>
              <img src={slide_image_4} alt="slide_image" />
            </picture>
              {/* <img src={slide_image_4} alt="slide_image" /> */}
            </SwiperSlide>
          <SwiperSlide className={s.swiper_slide}>
           <picture>
              <source media="(max-width: 320px)"
                srcset={slide_image_10}
                type="image/webp">
              </source>
              <source media="(max-width: 768px)"
                srcset={slide_image_15}
                type="image/webp">
              </source>
              <img src={slide_image_5} alt="slide_image" />
            </picture>
              {/* <img src={slide_image_5} alt="slide_image" /> */}
            </SwiperSlide>
          {/* <Box className="slider-controler">
          <Box className="swiper-pagination"></Box>
          </Box> */}
       </Swiper>
      </Box>
    </>
  );
};

export default MainSlider;
