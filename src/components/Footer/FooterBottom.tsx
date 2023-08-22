import { Box, Link, Stack, styled } from '@mui/material';

import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';
import { TypographyList } from './FooterListItem';

const FooterBottomStyle = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 8px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    justifyContent: 'centre',
    alignItems: 'center',
    gap: '32px',
    wight: '100%',
    padding: '24px 0px',
    textAlign: 'center',
  },
}));
const TextLink = styled(Link)(({ theme }) => ({
  lineHeight: '21.13px',
  fontSize: '18px',
  transition: '0.5s',
  color: 'inherit',
  height: '100%',
  textDecoration: 'none',
  cursor: 'pointer',
  borderBottom: 'solid 2px',
  '&:hover': {
    color: 'inherit',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    lineHeight: '18.78px',
  },
}));

export const FooterBottom = () => {
  return (
    <FooterBottomStyle>
      <TypographyList>Baza Trainee Ukraine 2023. Всі права захищені&copy;</TypographyList>
      <TextLink href="#">
        <TypographyList>Політика конфіденційності</TypographyList>
      </TextLink>
      <TextLink href="#">Правила користування сайтом</TextLink>
      <Stack gap="13px" direction="row">
        <SvgSpriteIcon sx={{ color: (theme) => theme.palette.text.primary }} fontSize="medium" svgSpriteId={'instagram_icon'} />
        <SvgSpriteIcon sx={{ color: (theme) => theme.palette.text.primary }} fontSize="medium" svgSpriteId={'facebook_icon'} />
      </Stack>
    </FooterBottomStyle>
  );
};
