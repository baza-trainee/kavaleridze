import { FC } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import Section from '../../Common/Section';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./MainSlider.css";
import slide_image_1 from "../../../assets/tempData/images/mainSlider/img1.jpg";
import slide_image_2 from "../../../assets/tempData/images/mainSlider/img2.jpg" ;
import slide_image_3 from "../../../assets/tempData/images/mainSlider/img3.jpg" ;
import slide_image_4 from "../../../assets/tempData/images/mainSlider/img4.jpg" ;
import slide_image_5 from "../../../assets/tempData/images/mainSlider/img5.jpg" ;
import slide_image_11 from  "../../../assets/tempData/images/mainSlider/img1_tablet.jpg";
import slide_image_12 from  "../../../assets/tempData/images/mainSlider/img2_tablet.jpg";
import slide_image_13 from  "../../../assets/tempData/images/mainSlider/img3_tablet.jpg";
import slide_image_14 from  "../../../assets/tempData/images/mainSlider/img4_tablet.jpg";
import slide_image_15 from "../../../assets/tempData/images/mainSlider/img5_tablet.jpg";
import slide_image_6 from "../../../assets/tempData/images/mainSlider/img1_mobil.jpg";
import slide_image_7 from "../../../assets/tempData/images/mainSlider/img2_mobil.jpg";
import slide_image_8 from "../../../assets/tempData/images/mainSlider/img3_mobil.jpg";
import slide_image_9 from "../../../assets/tempData/images/mainSlider/img4_mobil.jpg";
import slide_image_10 from "../../../assets/tempData/images/mainSlider/img5_mobil.jpg";


const MainSlider:FC = () => {
  return (
    <>
      <Container>
        <Section variant="light" sx={
          { marginTop: { xs: '60px', md: '80px', lg: '120px' },
            marginBottom: { xs: '24px', md: '32px', lg: '40px' },
          }}>
          <Typography variant="h1" component="h2"  maxWidth={1000} >
              Вас вітає музей-майстерня Івана Кавалерідзе!
          </Typography>
        </Section>
       </Container>
       <Box className="container">

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={500}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow,Autoplay, Pagination]}
          className="mySwiper2"
      >
          <SwiperSlide className="swiper_slide2">
            <picture>
              <source media="(max-width: 320px)"
                srcSet={slide_image_6}
                type="image/webp">
              </source>
              <source media="(max-width: 768px)"
                srcSet={slide_image_11}
                type="image/webp">
              </source>
              <img src={slide_image_1} alt="slide_image"  loading="lazy" />
            </picture>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide2">
            <picture>
              <source media="(max-width: 320px)"
                srcSet={slide_image_7}
                type="image/webp">
              </source>
              <source media="(max-width: 768px)"
                srcSet={slide_image_12}
                type="image/webp">
              </source>
              <img src={slide_image_2} alt="slide_image"  loading="lazy"/>
            </picture>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide2">
            <picture>
              <source media="(max-width: 320px)"
                srcSet={slide_image_8}
                type="image/webp">
              </source>
              <source media="(max-width: 768px)"
                srcSet={slide_image_13}
                type="image/webp">
              </source>
              <img src={slide_image_3} alt="slide_image"  loading="lazy" />
            </picture>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide2">
            <picture>
              <source media="(max-width: 320px)"
                srcSet={slide_image_9}
                type="image/webp">
              </source>
              <source media="(max-width: 768px)"
               srcSet={slide_image_14}
                type="image/webp">
              </source>
              <img src={slide_image_4} alt="slide_image"  loading="lazy"/>
            </picture>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide2">
           <picture>
              <source media="(max-width: 320px)"
                srcSet={slide_image_10}
                type="image/webp">
              </source>
              <source media="(max-width: 768px)"
                srcSet={slide_image_15}
                type="image/webp">
              </source>
              <img src={slide_image_5} alt="slide_image"  loading="lazy"/>
            </picture>
          </SwiperSlide>
       </Swiper>
        </Box>
    </>
  );
};

export default MainSlider;
