import { FC } from 'react';
import { Container, Typography } from '@mui/material';
import Section from '../../Section/Section';
import { SmallGridItem, BigGridItem, FamousList, ImgArt, TopTextBlock } from './style';

const FamousArtist: FC = () => {
  const images = [
    { number: '1', alt: 'famous_artist', size: 'big' },
    { number: '2', alt: 'famous_artist', size: 'big' },
    { number: '3', alt: 'famous_artist', size: 'big' },
    { number: '4', alt: 'famous_artist', size: 'small' },
    { number: '5', alt: 'famous_artist', size: 'small' },
  ];

  return (
    <Section variant="dark">
      <Container>
        <FamousList sx={{ p: '120px 0' }}>
          <TopTextBlock >
            <Typography variant="h1">Пориньте у світ відомих митців України</Typography>
            <Typography variant="body1">Щорічно ми проводимо виставки молодих митців та організовуємо творчі вечори</Typography>
          </TopTextBlock>
          {images.map((image) => {
            const img = <ImgArt src={`/images/famous_artist/${image.number}.png`} alt={image.alt} />;
            const key = image.number + image.alt + image.size;
            return image.size === 'small' ? <SmallGridItem key={key}>{img}</SmallGridItem> : <BigGridItem key={key}>{img}</BigGridItem>;
          })}

          <SmallGridItem sx={{alignSelf:"end"}}>
            <Typography variant="h1">станьте частиною нашої загальної історії</Typography>
          </SmallGridItem>
        </FamousList>
      </Container>
    </Section>
  );
};

export default FamousArtist;
