import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';
import Section from '../Section/Section';
import Banner from './Banner';
import { dataInfo } from './fakeData';
import { truncateDescription } from './helpers';
import { WrapperImg } from './stylesComponents';

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
                    <Typography variant="h2">{truncateDescription(item.cardTitle, 100)}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: '600' }}>
                      {item.dataPerformance}
                    </Typography>
                    <Typography variant="caption">{truncateDescription(item.description, 150)}</Typography>
                  </Box>
                  <Button
                    variant="tertiary"
                    component={RouterLink}
                    sx={{ marginTop: '24px', fontSize: '18px', fontWeight: '600', lineHeight: 'normal' }}
                    to={dataInfo[index].cardTitle}
                    endIcon={<SvgSpriteIcon svgSpriteId="breadcrumbsSeparator_icon" />}>
                    Читати далі
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ width: '100%', textAlign: 'center', marginBottom: { xs: '60px', md: '80px' } }}>
          {visibleItems < cardsEvent.length && (
            <Button sx={{ width: '248px' }} onClick={handlerLoadMore} variant="secondary">
              Показати більше
            </Button>
          )}
        </Box>
      </Container>
    </Section>
  );
};

export default Events;
