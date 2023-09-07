import { FC } from 'react';
import { Container } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, styled, Box, Link } from '@mui/material';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';
import { dataInfo } from './dataInfo';
console.log(dataInfo);

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import { AllEventsButton } from './style';
// import Section from '../../Section/Section';

const EventsPreviewSection = styled('section')(({ theme }) => ({
  position: 'relative',
  margin: '120px 0px',
  // paddingBottom: '80px',
  // [theme.breakpoints.down('lg')]: {
  //   padding: '0px 40px',
  // },
  // [theme.breakpoints.down('md')]: {
  //   padding: '0px  16px',
  // },
}));

const EventsTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Kyiv Type',
  fontSize: '40px',
  fontWeight: '500',
  lineHeight: '44px',
  color: '#000000',

  // [theme.breakpoints.down('lg')]: {
  //   padding: '0px 40px',
  // },
  // [theme.breakpoints.down('md')]: {
  //   padding: '0px  16px',
  // },
}));

const DataInfo = styled(Typography)(({ theme }) => ({
  // fontFamily: 'Raleway',
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '28px',
  color: theme.palette.text.secondary,

  // [theme.breakpoints.down('lg')]: {
  //   padding: '0px 40px',
  // },
  // [theme.breakpoints.down('md')]: {
  //   padding: '0px  16px',
  // },
}));

const CardsTitle = styled('h3')(({ theme }) => ({
  fontFamily: 'Kyiv Type',
  fontSize: '24px',
  fontWeight: '500',
  lineHeight: '28px',
  color: '#000000',

  // [theme.breakpoints.down('lg')]: {
  //   padding: '0px 40px',
  // },
  // [theme.breakpoints.down('md')]: {
  //   padding: '0px  16px',
  // },
}));

const WrapperImg = styled(Box)(({ theme }) => ({
  backgroundColor: 'blue',
  width: '642px',
}));

const EventDescription = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '400',
  lineHeight: '28px',
  color: '#000000',

  // `.img` {
  //   width: 100%;
  // }

  img: {
    cursor: 'pointer',
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
  },

  // [theme.breakpoints.down('lg')]: {
  //   padding: '0px 40px',
  // },
  // [theme.breakpoints.down('md')]: {
  //   padding: '0px  16px',
  // },
}));

// const textHover = {
//   ':hover': {
//     cursor: 'pointer',
//     color: theme.palette.primary.main,
//   },
// };
import './styles.css';

const EventsPreview: FC = () => {
  return (
    <EventsPreviewSection>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <EventsTitle variant="h2">Події музею</EventsTitle>
          <AllEventsButton href="#text-buttons" endIcon={<SvgSpriteIcon svgSpriteId="breadcrumbsSeparator_icon" />}>
            Дивитись усі події
          </AllEventsButton>
        </Box>
        <Swiper
          // cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper">
          {dataInfo.map((slideContent, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ display: 'flex', gap: '26px' }}>
                <Box sx={{ width: ' 452px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <DataInfo>{slideContent.data}</DataInfo>
                  <CardsTitle>{slideContent.cardTitle}</CardsTitle>
                  <EventDescription>{slideContent.description}</EventDescription>
                  <Button variant="secondary" sx={{ maxWidth: '244px', lineHeight: '1.67' }}>
                    Детальніше про подію
                  </Button>
                </Box>
                <WrapperImg sx={{}}>
                  <img src={slideContent.img} alt="picture" />
                </WrapperImg>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Container>
    </EventsPreviewSection>
  );
};

export default EventsPreview;
