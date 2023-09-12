import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';

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
  const truncateDescription = (string: string): string => {
    const arrayWords = string.split(' ');

    return arrayWords.length > 30 ? string.split(' ').slice(0, 30).join(' ') + ' ' + '...' : string;
  };

  return (
    <Swiper
      navigation={true}
      pagination={true}
      // mousewheel={true}
      keyboard={true}
      speed={700}
      spaceBetween={80}
      modules={[Navigation, Pagination, Keyboard]}
      className="mySwiper">
      {fakeData.map(({ dataPublication, cardTitle, dataPerformance, description, img }, index) => (
        <SwiperSlide key={index}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, gap: '26px' }}>
            <Box sx={{ width: { xs: '100%', lg: '452px' }, display: 'flex', flexDirection: 'column', gap: '36px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <DataInfo>{dataPublication}</DataInfo>
                <CardsTitle>{cardTitle}</CardsTitle>
                <EventData>{dataPerformance}</EventData>
                <EventDescription>{truncateDescription(description)}</EventDescription>
              </Box>
              <Button component={RouterLink} to="/events" variant="secondary" sx={{ maxWidth: '244px' }}>
                Детальніше про подію
              </Button>
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
