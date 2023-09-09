import { FC } from 'react';
import { Container, Box, Typography, styled, Button } from '@mui/material';
import Section from '../Section/Section';
import { dataInfo } from './fakeData';
import { useTheme } from '@mui/material';
import bannerMob from './ImgBanner/banner-mob.png';
import bannerTablet from './ImgBanner/banner-tablet.png';
import bannerDesc from './ImgBanner/banner-desctop.png';
import { theme } from '../../theme';

import { useMediaQuery } from '@mui/material';

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

const Banner = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const buttonText = isSmallScreen ? 'Детальніше' : 'Детальніше про подію';

  const truncateDescription = (string: string, maxLength: number): string => {
    return string.length >= maxLength ? string.slice(0, maxLength) + '...' : string;
  };

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
  // backgroundColor: 'blue',
  width: '100%',
  // height: '270px',

  '& img': {
    display: 'block',
    width: '100%',
    minHeight: 'auto',
    objectFit: 'cover',
  },
}));

const Events: FC = () => {
  const theme = useTheme();

  return (
    <Section variant="light">
      <Banner />
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            marginTop: '32px',
            paddingBottom: '24px',
          }}>
          {dataInfo.map((item) => (
            <Box sx={{ paddingTop: '24px', paddingBottom: '24px', borderBottom: `1px solid ${theme.palette.gray.main} ` }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}>
                <WrapperImg>
                  <img src={item.img} alt="" />
                </WrapperImg>
                <Typography sx={{ color: theme.palette.text.secondary }}>15.08.2023</Typography>
                <Typography variant="h2" sx={{ fontWeight: '500' }}>
                  Відкриття персональної виставки Ірен VODOLAZ “UNDER FIRE”
                </Typography>
                <Typography sx={{ fontWeight: '600' }}>10 серпня – 6 вересня</Typography>
                <Typography>
                  Запрошуємо на персональну виставку Ірен Vodolaz “UNDER FIRE” 10.08 о 16:00, яка відбудеться у музеї-мастерні І.П.
                  Кавалерідзе за адресою Андріївський
                </Typography>
              </Box>

              <Typography sx={{ marginTop: '24px' }} variant="h3">
                Читати далі
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  );
};

export default Events;
