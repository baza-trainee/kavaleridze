import { FC } from 'react';
import { HeroButton, ContentBlock, Title, WrapperContent, ButtonText } from './style.js';
import data from '../../../assets/siteData';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon.js';
const Hero: FC = () => {
  const { mainTitle } = data.general;
  const { share } = data.buttonsLabels;
  return (
    <WrapperContent>
      <ContentBlock>
        <Title variant="title">{mainTitle}</Title>
        <HeroButton variant="secondary">
          <ButtonText variant="navigationKyiv">{share}</ButtonText>{' '}
          <SvgSpriteIcon svgSpriteId="share_icon" />
        </HeroButton>
      </ContentBlock>
    </WrapperContent>
  );
};

export default Hero;
