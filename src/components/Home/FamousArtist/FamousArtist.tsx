import { FC } from 'react';
import { Container, Typography, useTheme } from '@mui/material';
import Section from '../../Section/Section';
import { SmallGridItem, BigGridItem, FamousList, ImgArt, TopTextBlock, BottomtTextBlock, Title, ContainerFamous } from './style';
import data from '../../../assets/siteData';
const FamousArtist: FC = () => {
  const { famousArtImages } = data;
  const theme = useTheme();
  return (
    <Section variant="dark">
      <ContainerFamous >
        <FamousList>
          <TopTextBlock>
            <Title variant="h1">Пориньте у світ відомих митців України</Title>
            <Typography
              sx={{
                [theme.breakpoints.up('md')]: {
                  fontSize: 18,
                },
              }}
              variant="caption">
              Щорічно ми проводимо виставки молодих митців та організовуємо творчі вечори
            </Typography>
          </TopTextBlock>
          {famousArtImages.map(({ src, alt, size }) => {
            const img = <ImgArt src={src} alt={alt} />;
            const key = src + alt + size;
            return size === 'small' ? <SmallGridItem key={key}>{img}</SmallGridItem> : <BigGridItem key={key}>{img}</BigGridItem>;
          })}

          <BottomtTextBlock sx={{}}>
            <Title variant="h1">станьте частиною нашої загальної історії</Title>
          </BottomtTextBlock>
        </FamousList>
      </ContainerFamous>
    </Section>
  );
};

export default FamousArtist;
