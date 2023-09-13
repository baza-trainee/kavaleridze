import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container } from '@mui/material';
import { useTheme, styled, Box, Typography, Button } from '@mui/material';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';
import { dataInfo } from './fakeData';
import Slider from './Slider';

const EventsPreviewSection = styled('section')(({ theme }) => ({
  position: 'relative',
  marginBottom: '60px',

  [theme.breakpoints.up('md')]: {
    // height: '412px',
  },

  [theme.breakpoints.up('lg')]: {
    width: '642px',
    // height: '412px',
  },
}));

const EventsTitle = styled(Typography)(() => ({
  fontFamily: 'Kyiv Type',
  fontSize: '40px',
  fontWeight: '500',
  lineHeight: '44px',
}));

const EventsPreview: FC = () => {
  const theme = useTheme();

  return (
    <EventsPreviewSection>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: '', md: 'space-between' },
            gap: { xs: '24px' },
            alignItems: { xs: 'flex-start' },
            marginBottom: { xs: '24px', md: '40px' },
          }}>
          <Typography variant="h1">Події музею</Typography>
          <Button
            variant="tertiary"
            component={RouterLink}
            sx={{ fontWeight: '600' }}
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
