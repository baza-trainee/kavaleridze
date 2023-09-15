import { FC } from 'react';

import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import Section from '../Section/Section';

import { styled } from '@mui/system';

import { eventData as data } from './eventData';
import BackToEventsBtn from './parts/BackToEventsBtn';
import EventDetails from './parts/EventDetails';
import EventTitle from './parts/EventTitle';

const ContentBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.only('lg')]: {
    paddingBottom: '120px',
  },
  [theme.breakpoints.only('md')]: {
    paddingBottom: '80px',
  },
  [theme.breakpoints.only('sm')]: {
    paddingBottom: '60px',
  },
}));

const Event: FC = () => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.only('sm'));
  return (
    <Section variant="light">
      <Container>
        <ContentBox>
          <EventTitle {...data} />
          <EventDetails {...data} />
          <BackToEventsBtn title={isMobile ? 'До всіх подій' : 'Повернутися до всіх подій'} />
        </ContentBox>
      </Container>
    </Section>
  );
};

export default Event;
