import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow'
// import slide_image_1 from "../../../assets/tempData/images/mainSlider/img1.jpg"
// import slide_image_2 from "../../../assets/tempData/images/mainSlider/img2.jpg" 
// import slide_image_3 from "../../../assets/tempData/images/mainSlider/img3.jpg" 
// import slide_image_4 from "../../../assets/tempData/images/mainSlider/img4.jpg" 
// import slide_image_5 from "../../../assets/tempData/images/mainSlider/img5.jpg" 
// import slide_image_11 from  "../../../assets/tempData/images/mainSlider/img1_tablet.jpg"
// import slide_image_12 from  "../../../assets/tempData/images/mainSlider/img2_tablet.jpg"
// import slide_image_13 from  "../../../assets/tempData/images/mainSlider/img3_tablet.jpg"
// import slide_image_14 from  "../../../assets/tempData/images/mainSlider/img4_tablet.jpg"
// import slide_image_15 from "../../../assets/tempData/images/mainSlider/img5_tablet.jpg"
// import slide_image_6 from "../../../assets/tempData/images/mainSlider/img1_mobil.jpg"
// import slide_image_7 from "../../../assets/tempData/images/mainSlider/img2_mobil.jpg"
// import slide_image_8 from "../../../assets/tempData/images/mainSlider/img3_mobil.jpg"
// import slide_image_9 from "../../../assets/tempData/images/mainSlider/img4_mobil.jpg"
// import slide_image_10 from "../../../assets/tempData/images/mainSlider/img5_mobil.jpg"

// import Section from '../../Section/Section';
import s from "./mainslider.module.css"
// import { PropsWithChildren } from 'react'

// interface Slide {
//   picture: any
//   source: any
//   img: any
//   className: string
// }
// type PropsWithChildren<P> = P & { children?: ReactNode };
// type FooProps = {
//   picture: any
//   source: any
//   img: any
//   // look here 👇
//   children: ReactNode
// }


const MainSlider:FC = () => {
  return (
    <>
      {/* <Section variant="light"> */}
      <Box className={s.container}>
      <Typography variant="h2" mb={{ xs: 3, md: 4, lg: 5 }} sx={{ ml: 10}} mt={{ xs: 5, md: 10, lg: 15 }} maxWidth={1000} >
           Вас вітає музей-майстерня Івана Кавалерідзе!
      </Typography>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={500}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className={s.mySwiper2}
      >
          <SwiperSlide className={s.swiper_slide}>
            {/* <picture>
              <source media="(max-width: 320px)"
                srcSet={slide_image_6}
                type="image/webp">
              </source>
              <source media="(max-width: 768px)"
                srcSet={slide_image_11}
                type="image/webp">
              </source>
              <img src={slide_image_1} alt="slide_image"  loading="lazy" />
            </picture> */}
          </SwiperSlide>
          <SwiperSlide className={s.swiper_slide}>
            {/* <picture>
              <source media="(max-width: 320px)"
                srcSet={slide_image_7}
                type="image/webp">
              </source>
              <source media="(max-width: 768px)"
                srcSet={slide_image_12}
                type="image/webp">
              </source>
              <img src={slide_image_2} alt="slide_image"  loading="lazy"/>
            </picture> */}
          </SwiperSlide>
          <SwiperSlide className={s.swiper_slide}>
            {/* <picture>
              <source media="(max-width: 320px)"
                srcSet={slide_image_8}
                type="image/webp">
              </source>
              <source media="(max-width: 768px)"
                srcSet={slide_image_13}
                type="image/webp">
              </source>
              <img src={slide_image_3} alt="slide_image"  loading="lazy" />
            </picture> */}
          </SwiperSlide>
          <SwiperSlide className={s.swiper_slide}>
            {/* <picture>
              <source media="(max-width: 320px)"
                srcSet={slide_image_9}
                type="image/webp">
              </source>
              <source media="(max-width: 768px)"
               srcSet={slide_image_14}
                type="image/webp">
              </source>
              <img src={slide_image_4} alt="slide_image"  loading="lazy"/>
            </picture> */}
          </SwiperSlide>
          <SwiperSlide className={s.swiper_slide}>
           {/* <picture>
              <source media="(max-width: 320px)"
                srcSet={slide_image_10}
                type="image/webp">
              </source>
              <source media="(max-width: 768px)"
                srcSet={slide_image_15}
                type="image/webp">
              </source>
              <img src={slide_image_5} alt="slide_image"  loading="lazy"/>
            </picture> */}
          </SwiperSlide>
       </Swiper>
        </Box>
        {/* </Section> */}
    </>
  );
};

export default MainSlider;
