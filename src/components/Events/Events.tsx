import { FC } from 'react';
import { Container, Box, Typography, styled, Button } from '@mui/material';
import Section from '../Section/Section';
import { dataInfo } from './fakeData';
import { useTheme } from '@mui/material';
import bannerMob from './ImgBanner/banner-mob.png';
import bannerTablet from './ImgBanner/banner-tablet.png';
import bannerDesc from './ImgBanner/banner-desctop.png';
import { theme } from '../../theme';

const BannerWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '480px',
  margin: '0 auto',
  paddingTop: '236px',
  paddingBottom: '32px',
  // opacity: 0.8,
  // background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
  // backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.up('xs')]: {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${bannerMob})`,
    // backgroundImage: `url(${bannerMob})`,
  },
  [theme.breakpoints.up('md')]: {
    height: '400px',
    paddingTop: '216px',
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${bannerTablet})`,
  },
  [theme.breakpoints.up('lg')]: {
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
  [theme.breakpoints.up('lg')]: {},
}));

const TextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-end',
    width: '434px',
  },
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  marginTop: '24px',

  [theme.breakpoints.up('md')]: {
    textAlign: 'end',
  },
}));

// console.log(dataInfo);

const Banner = () => {
  return (
    <BannerWrapper>
      <ContentBox>
        <TextBox>
          <Typography variant="h3" sx={{ fontWeight: '600', color: theme.palette.text.primary }}>
            Виставка робіт Дмитра Чернобая “Війна ще триває”
          </Typography>
          <Typography sx={{ fontWeight: '500', color: theme.palette.text.primary }}>
            Ця виставка-розповідь Дмитра Чернобая, простого хлопця з Маріуполя, що пройшов через пекло, але знайшов в собі сили творити
            мистецтво.
          </Typography>
        </TextBox>
        <ButtonBox>
          <Button
            sx={{
              minWidth: { xs: '143px', md: '242px' },
              fontSize: '18px',
              fontWeight: '500',
              borderColor: theme.palette.text.primary,
              color: theme.palette.text.primary,
            }}
            variant="secondary">
            Детальніше
          </Button>
        </ButtonBox>
      </ContentBox>
    </BannerWrapper>
  );
};

const Events: FC = () => {
  const theme = useTheme();

  return (
    <Section variant="light">
      <Banner />
      <Container sx={{ paddingTop: '32px' }}>
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Box>
            <img src="" alt="" />
          </Box>
          <Typography sx={{ color: theme.palette.text.secondary }}>15.08.2023</Typography>
          <Typography variant="h2" sx={{ fontWeight: '500' }}>
            Відкриття персональної виставки Ірен VODOLAZ “UNDER FIRE”{' '}
          </Typography>
          <Typography sx={{ fontWeight: '600' }}>10 серпня – 6 вересня</Typography>
          <Typography>
            Запрошуємо на персональну виставку Ірен Vodolaz “UNDER FIRE” 10.08 о 16:00, яка відбудеться у музеї-мастерні І.П. Кавалерідзе за
            адресою Андріївський
          </Typography>
        </Box>
      </Container>
    </Section>
  );
};

export default Events;
