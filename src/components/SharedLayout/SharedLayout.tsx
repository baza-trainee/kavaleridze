import { Stack, Fab, Box, Fade, useScrollTrigger } from '@mui/material';
import { FC, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';

const SharedLayout: FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });

  const onClickScrollTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  };
  return (
    <Stack display={'flex'} minHeight={'100vh'}>
      <Header ref={scrollRef} />
      <Stack
        sx={{
          minHeight: '100%',
          flex: '1 1 auto',
        }}>
        <Outlet />
        <Fade in={scrollTrigger}>
          <Box sx={{ position: 'sticky', bottom: 0 }} role="presentation">
            <Box sx={{ position: 'absolute', bottom: 90, right: 20 }}>
              <Fab onClick={onClickScrollTop}>
                <Stack width={50} height={50} justifyContent="center" alignItems="center" border="1px solid" borderRadius="50%">
                  <SvgSpriteIcon svgSpriteId="arrowRight_icon" sx={{ transform: 'rotate(-90deg)' }} />
                </Stack>
              </Fab>
            </Box>
          </Box>
        </Fade>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default SharedLayout;
