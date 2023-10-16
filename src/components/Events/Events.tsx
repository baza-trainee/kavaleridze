import { FC, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Box, Typography, Button, useTheme } from '@mui/material';
import ButtonWithIcon from '../Common/ButtonWithIcon';
import Section from '../Common/Section';
import { dataInfo } from './fakeData';
import Banner from './Banner';
import { WrapperImg } from './styles';
import { truncateDescription } from '@/helpers/truncateString';

import CircularProgress from '@mui/material/CircularProgress';
import { RotatingLines, ThreeDots } from 'react-loader-spinner';

const Events: FC = () => {
  const [cardsEvent, setItems] = useState(dataInfo);
  const [visibleItems, setVisibleItems] = useState(3);
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setItems(dataInfo);
  }, []);

  const handlerLoadMore = () => {
    setVisibleItems((prevValue) => prevValue + 3);
  };

  return (
    <Section variant="light">
      {loading && (
        <Box sx={{ display: 'grid', placeItems: 'center', height: '50vh' }}>
          <CircularProgress size="4rem" />
          <RotatingLines strokeColor="#F0B92D" strokeWidth="5" animationDuration="0.75" width="96" visible={true} />
          <ThreeDots height="80" width="80" radius="9" color="#F0B92D" ariaLabel="three-dots-loading" wrapperStyle={{}} visible={true} />
        </Box>
      )}

      {!loading && (
        <>
          <Banner />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '32px', lg: '40px' },
              marginTop: { xs: '32px', md: '44px' },
              paddingBottom: { xs: '40px', md: '32px' },
            }}>
            {cardsEvent.slice(0, visibleItems).map((item, index) => (
              <Container key={index} sx={{ borderBottom: `1px solid ${theme.palette.gray.main} ` }}>
                <Box key={index} sx={{ padding: { xs: '24px 0' } }}>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { md: '1fr 1fr', lg: '494px 436px' },
                      gap: { xs: '16px', md: '24px', lg: '48px' },
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
                        <Typography variant="h2">{truncateDescription(item.cardTitle, 100)}</Typography>
                        <Typography variant="body1" sx={{ fontWeight: '600' }}>
                          {item.dataPerformance}
                        </Typography>
                        <Typography variant="caption">{truncateDescription(item.description, 150)}</Typography>
                      </Box>
                      <ButtonWithIcon
                        variant="tertiary"
                        component={RouterLink}
                        sx={{ marginTop: '24px' }}
                        to={dataInfo[index].cardTitle}
                        svgSpriteId="breadcrumbsSeparator_icon"
                        title="Читати далі"
                      />
                    </Box>
                  </Box>
                </Box>
              </Container>
            ))}
          </Box>
          <Box sx={{ width: '100%', textAlign: 'center', marginBottom: { xs: '60px', md: '80px' } }}>
            {visibleItems < cardsEvent.length && (
              <Button sx={{ width: '248px' }} onClick={handlerLoadMore} variant="secondary">
                Показати більше
              </Button>
            )}
          </Box>
        </>
      )}
    </Section>
  );
};

export default Events;
