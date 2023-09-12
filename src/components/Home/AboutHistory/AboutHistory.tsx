import { FC } from 'react';

import { Container, Typography, useTheme } from '@mui/material';
import Section from '../../Section/Section';
import data from '../../../assets/siteData';
import { InfoWrapper,Img, Button } from './style';


const AboutHistory: FC = () => {
  const { buttonsLabels, about_history } = data;
  const { text, src } = about_history;



  return (
    <Section variant="light">
      <Container style={{maxWidth:'1280px',width:'100%'}} >
        <InfoWrapper >
          <Typography variant="h1">Історія музею</Typography>
          <Button title={buttonsLabels.more} svgSpriteId="arrow_rigth_icon" variant="tertiary" />
          <Typography>{text.text1}</Typography>
          <Typography>{text.text2}</Typography>
          <Img sx={{order:2}} src={src} alt="" />
        </InfoWrapper>
      </Container>
    </Section>
  );
};

export default AboutHistory;
