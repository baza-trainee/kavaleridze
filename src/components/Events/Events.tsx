import { FC, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Box, Typography, styled, Button } from '@mui/material';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';
import Section from '../Section/Section';
import { dataInfo } from './fakeData';
import { useTheme } from '@mui/material';
import bannerMob from './ImgBanner/banner-mob.png';
import bannerTablet from './ImgBanner/banner-tablet.png';
import bannerDesc from './ImgBanner/banner-desctop.png';
import { theme } from '../../theme';

import { useMediaQuery } from '@mui/material';
import { useState } from 'react';

const BannerWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',

  margin: '0 auto',
  paddingTop: '236px',
  paddingBottom: '32px',

  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.up('xs')]: {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${bannerMob})`,
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: '216px',
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${bannerTablet})`,
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '312px',
    paddingBottom: '44px',
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${bannerDesc})`,
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  width: '320px',
  padding: '0 16px',
  textAlign: 'start',

  [theme.breakpoints.up('xs')]: {},
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    padding: '0 40px',
  },
  [theme.breakpoints.up('lg')]: { padding: '0 80px' },
}));

const TextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-end',
    width: '434px',
    gap: '24px',
  },

  [theme.breakpoints.up('lg')]: { width: '560px' },
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  marginTop: '24px',

  [theme.breakpoints.up('md')]: {
    textAlign: 'end',
  },
}));

// console.log(dataInfo);

const truncateDescription = (string: string, maxLength: number): string => {
  return string.length >= maxLength ? string.slice(0, maxLength) + '...' : string;
};

const Banner = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const buttonText = isSmallScreen ? 'Детальніше' : 'Детальніше про подію';

  return (
    <BannerWrapper>
      <ContentBox>
        <TextBox>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '18px', md: '24px', lg: '32px' },
              fontWeight: '500',
              lineHeight: { xs: '22px', md: '28px', lg: '36px' },
              color: theme.palette.text.primary,
            }}>
            {truncateDescription('Виставка робіт Дмитра Чернобая “Війна ще триває”', 100)}
          </Typography>
          <Typography
            sx={{
              fontSize: { md: '16px' },
              fontWeight: { md: '400' },
              lineHeight: { md: '24px' },
              color: theme.palette.text.primary,
            }}>
            {truncateDescription(
              'Ця виставка-розповідь Дмитра Чернобая, простого хлопця з Маріуполя, що пройшов через пекло, але знайшов в собі сили творити мистецтво. Ця виставка-розповідь Дмитра Чернобая, простого хлопця з Маріуполя хлопця з Маріуполя',
              200
            )}
          </Typography>
        </TextBox>
        <ButtonBox>
          <Button
            component={RouterLink}
            to="/events/event"
            sx={{
              minWidth: { xs: '143px' },
              fontSize: '18px',
              fontWeight: '500',
              borderColor: theme.palette.text.primary,
              color: theme.palette.text.primary,
            }}
            variant="secondary">
            {buttonText}
          </Button>
        </ButtonBox>
      </ContentBox>
    </BannerWrapper>
  );
};

export const WrapperImg = styled(Box)(({ theme }) => ({
  backgroundColor: 'blue',
  width: '100%',
  height: '100%',

  '& img': {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const Events: FC = () => {
  const [cardsEvent, setItems] = useState(dataInfo);
  const [visibleItems, setVisibleItems] = useState(3);
  const theme = useTheme();

  useEffect(() => {
    setItems(dataInfo);
  }, []);

  const handlerLoadMore = () => {
    setVisibleItems((prevValue) => prevValue + 3);
  };

  return (
    <Section variant="light">
      <Banner />
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            marginTop: { xs: '32px', md: '44px' },
            paddingBottom: { xs: '40px', md: '32px' },
          }}>
          {cardsEvent.slice(0, visibleItems).map((item, index) => (
            <Box key={index} sx={{ padding: { xs: '24px 0', md: '32px 0' }, borderBottom: `1px solid ${theme.palette.gray.main} ` }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr', lg: '494px 436px' },
                  gap: { xs: '16px', md: '24px' },
                }}>
                <WrapperImg>
                  <img src={item.img} alt="" />
                </WrapperImg>
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                    }}>
                    <Typography sx={{ color: theme.palette.text.secondary }}>{item.dataPublication}</Typography>
                    <Typography variant="h2" sx={{ fontWeight: '500' }}>
                      {truncateDescription(item.cardTitle, 100)}
                    </Typography>
                    <Typography sx={{ fontWeight: '600' }}>{item.dataPerformance}</Typography>
                    <Typography sx={{ fontSize: { md: '16px' }, lineHeight: { md: '24px' } }}>
                      {truncateDescription(item.description, 200)}
                    </Typography>
                  </Box>
                  <Box
                    component={RouterLink}
                    to="/events/event"
                    sx={{
                      display: 'flex',
                      gap: '4px',
                      marginTop: '24px',
                      alignItems: 'center',
                      fontSize: '18px',
                      fontWeight: '600',
                      transition: '250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                      '&:hover': { color: theme.palette.primary.dark },
                    }}>
                    Читати далі
                    <SvgSpriteIcon svgSpriteId="breadcrumbsSeparator_icon" />
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ width: '100%', textAlign: 'center', marginBottom: { xs: '60px', md: '80px' } }}>
          <Button sx={{ width: '248px' }} onClick={handlerLoadMore} disabled={visibleItems >= cardsEvent.length} variant="secondary">
            Показати більше
          </Button>
        </Box>
      </Container>
    </Section>
  );
};

export default Events;
