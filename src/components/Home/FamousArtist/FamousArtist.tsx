import { FC } from 'react';
import { Container,  Typography } from '@mui/material';
import Section from '../../Section/Section';
import { SmallGridItem, BigGridItem, FamousList, ImgArt, TopTextBlock, Title } from './style';
import data from '../../../assets/siteData';
const FamousArtist: FC = () => {
  const { famousArtImages } = data;
  return (
    <Section variant="dark">
      <Container>
      <FamousList sx={{ p: '120px 0' }}>
        <TopTextBlock>
          <Title variant="h1">Пориньте у світ відомих митців України</Title>
          <Typography variant="body1">Щорічно ми проводимо виставки молодих митців та організовуємо творчі вечори</Typography>
        </TopTextBlock>
        {famousArtImages.map(({src,alt,size}) => {
          const img = <ImgArt src={src} alt={src} />;
          const key = src + alt + size;
          return size === 'small' ? <SmallGridItem key={key}>{img}</SmallGridItem> : <BigGridItem key={key}>{img}</BigGridItem>;
        })}

        <SmallGridItem sx={{ alignSelf: 'end' }}>
          <Title variant="h1">станьте частиною нашої загальної історії</Title>
        </SmallGridItem>
      </FamousList>
      </Container>
    </Section>
  );
};

export default FamousArtist;
