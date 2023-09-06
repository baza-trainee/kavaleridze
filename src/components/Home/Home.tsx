import { FC } from 'react';
import Hero from './Hero/Hero';
import MainSlider from './MainSlider/MainSlider';
import Events from '../Events/Events';
import FamousArtist from './FamousArtist/FamousArtist';
import AboutHistory from './AboutHistory/AboutHistory';
import Section from '../Section/Section';

const Home: FC = () => {
  return (
    <Section variant="light">
      <Hero />
      <MainSlider />
      <Events />
      <FamousArtist />
      <AboutHistory />
    </Section>
  );
};

export default Home;
