import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container } from '@mui/material';
import { styled, Box, Typography, Button } from '@mui/material';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';
import { dataInfo } from './fakeData';
import Slider from './Slider';

const EventsPreviewSection = styled('section')(({ theme }) => ({
  position: 'relative',
  marginBottom: '60px',

  [theme.breakpoints.up('md')]: {
    marginBottom: '80px',
  },

  [theme.breakpoints.up('lg')]: {
    marginBottom: '120px',
  },
}));

const EventsPreview: FC = () => {
  return (
    <EventsPreviewSection>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { md: 'space-between' },
            gap: { xs: '24px', md: '0' },
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            marginBottom: { xs: '24px', md: '32px', lg: '40px' },
          }}>
          <Typography variant="h1">Події музею</Typography>
          <Button
            variant="tertiary"
            component={RouterLink}
            sx={{ fontSize: { xs: '14px', md: '18px' }, fontWeight: '600', lineHeight: { xs: '20px', md: 'normal' } }}
            to="/events"
            endIcon={<SvgSpriteIcon svgSpriteId="breadcrumbsSeparator_icon" />}>
            Дивитись усі події
          </Button>
        </Box>
        <Slider fakeData={dataInfo} />
      </Container>
    </EventsPreviewSection>
  );
};

export default EventsPreview;
