import { FC } from 'react';
import { Container } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, styled, Box, Link } from '@mui/material';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';

import { AllEventsButton } from './style';
// import Section from '../../Section/Section';

const EventsPreviewSection = styled('section')(({ theme }) => ({
  margin: '120px 0px',
  // [theme.breakpoints.down('lg')]: {
  //   padding: '0px 40px',
  // },
  // [theme.breakpoints.down('md')]: {
  //   padding: '0px  16px',
  // },
}));

const EventsTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Kyiv Type',
  fontSize: '40px',
  fontWeight: '500',
  lineHeight: '44px',

  // [theme.breakpoints.down('lg')]: {
  //   padding: '0px 40px',
  // },
  // [theme.breakpoints.down('md')]: {
  //   padding: '0px  16px',
  // },
}));

// const textHover = {
//   ':hover': {
//     cursor: 'pointer',
//     color: theme.palette.primary.main,
//   },
// };

const EventsPreview: FC = () => {
  return (
    <EventsPreviewSection>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <EventsTitle variant="h2">Події музею</EventsTitle>
          <AllEventsButton href="#text-buttons">
            Дивитись усі події
            <SvgSpriteIcon svgSpriteId="breadcrumbsSeparator_icon" />
          </AllEventsButton>
        </Box>
        <Box>
          <Box></Box>
          <Box></Box>
        </Box>
      </Container>
    </EventsPreviewSection>
  );
};

export default EventsPreview;
