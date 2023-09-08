import { FC } from 'react';
import {  ContentBlock, Title, WrapperContent } from './style.js';
import data from '../../../assets/siteData';
import GeneralButton from '../../GeneralButton/GeneralButton.js';
const Hero: FC = () => {
  const { mainTitle } = data.general;
  const { share } = data.buttonsLabels;
  return (
    <WrapperContent>
      <ContentBlock>
        <Title variant="title">{mainTitle}</Title>
        <GeneralButton sx={{ color: 'white', borderColor: 'white' }} title={share} svgSpriteId="share_icon" variant="secondary" />
      </ContentBlock>
    </WrapperContent>
  );
};

export default Hero;
