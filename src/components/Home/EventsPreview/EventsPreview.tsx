import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container } from '@mui/material';
import { useTheme, styled, Box, Typography } from '@mui/material';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';
import { dataInfo } from './fakeData';
import Slider from './Slider';

const EventsPreviewSection = styled('section')(() => ({
  position: 'relative',
  margin: '120px 0px',
}));

const EventsTitle = styled(Typography)(() => ({
  fontFamily: 'Kyiv Type',
  fontSize: '40px',
  fontWeight: '500',
  lineHeight: '44px',
  color: '#000000',
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
            // alignItems: 'flex-end',
            marginBottom: { xs: '24px', md: '40px' },
          }}>
          <EventsTitle variant="h2">Події музею</EventsTitle>
          <Box
            component={RouterLink}
            to="/events"
            sx={{
              display: 'flex',
              gap: '4px',
              alignItems: 'center',
              fontSize: '18px',
              fontWeight: '600',
              transition: '250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              '&:hover': { color: theme.palette.primary.dark },
            }}>
            Дивитись усі події
            <SvgSpriteIcon svgSpriteId="breadcrumbsSeparator_icon" />
          </Box>
        </Box>
        <Slider fakeData={dataInfo} />
      </Container>
    </EventsPreviewSection>
  );
};

export default EventsPreview;
