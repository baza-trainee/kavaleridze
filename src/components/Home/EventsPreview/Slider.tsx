import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';

import { DataInfo, CardsTitle, EventData, EventDescription, WrapperImg } from './partsStyle';

interface IDataSliderProps {
  mainTitle: string;
  dataPublication: string;
  cardTitle: string;
  dataPerformance: string;
  description: string;
  img: string;
}

interface IFullData {
  fakeData: IDataSliderProps[];
}

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import custom styles for Swiper
import './sliderStyles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Slider: FC<IFullData> = ({ fakeData }) => {
  const truncateDescription = (string: string, maxLength: number): string => {
    return string.length >= maxLength ? string.slice(0, maxLength) + '...' : string;
  };

  return (
    <Swiper
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      speed={700}
      spaceBetween={80}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper">
      {fakeData.map(({ cardTitle, dataPerformance, description, img }, index) => (
        <SwiperSlide key={index}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, gap: '24px' }}>
            <Box sx={{ width: { xs: '100%', lg: '452px' }, display: 'flex', flexDirection: 'column', gap: '36px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* <DataInfo>{dataPublication}</DataInfo> */}
                <Typography sx={{ fontWeight: '500' }} variant="h3Kyiv" component="h3">
                  {cardTitle}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: '600' }}>
                  {dataPerformance}
                </Typography>
                <EventDescription>{truncateDescription(description, 150)}</EventDescription>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button component={RouterLink} to="/events" variant="secondary" sx={{ width: '288px' }}>
                  Детальніше про подію
                </Button>
              </Box>
            </Box>
            <WrapperImg sx={{}}>
              <img src={img} alt="picture" />
            </WrapperImg>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
