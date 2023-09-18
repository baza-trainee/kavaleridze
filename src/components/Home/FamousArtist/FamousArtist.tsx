import { FC } from 'react';
import { Typography, useTheme } from '@mui/material';
import Section from '../../Common/Section';
import { SmallGridItem, BigGridItem, FamousList, ImgArt, TopTextBlock, BottomtTextBlock, ContainerFamous } from './styles';
import data from '../../../assets/siteData';

const FamousArtist: FC = () => {
  const { famousArtImages } = data;
  const theme = useTheme();
  return (
    <Section variant="dark" component="section">
      <ContainerFamous>
        <FamousList>
          <TopTextBlock>
            <Typography variant="h1" component="h2">
              Пориньте у світ відомих митців України
            </Typography>
            <Typography
              sx={{
                [theme.breakpoints.up('lg')]: {
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
            <Typography variant="h1" component="p" sx={{ fontSize: { xs: 24, lg: 40 } }}>
              станьте частиною нашої загальної історії
            </Typography>
          </BottomtTextBlock>
        </FamousList>
      </ContainerFamous>
    </Section>
  );
};

export default FamousArtist;
