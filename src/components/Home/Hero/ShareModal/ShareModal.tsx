import { FC } from 'react';
import { Modal, Box, Typography, Stack, IconButton, Divider } from '@mui/material';
import { FacebookShareButton, ViberShareButton, TelegramShareButton } from 'react-share';
import SvgSpriteIcon from '../../../PrimaryButton/SvgSpriteIcon';
import { StyledBox, StyledTextButton } from './styles';

import facebook from '/images/social_media/facebook.png';
import gmail from '/images/social_media/gmail.png';
import viber from '/images/social_media/viber.png';
import telegram from '/images/social_media/telegram.png';

interface ShareModalProps {
  open: boolean;
  onCloseModal: () => void;
}

interface SocialMediaIconProps {
  src: string;
  alt: string;
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ src, alt }) => {
  return <Box component="img" src={src} alt={alt} height={{ xs: 40, md: 56 }} width={{ xs: 40, md: 56 }} display="block" />;
};

const ShareModal: FC<ShareModalProps> = ({ open, onCloseModal }) => {
  const CLIENT_URL = import.meta.env.VITE_CLIENT_URL;

  const onClickGmailBtn = () => {
    const message = `Check out this awesome website! %0D%0A %0D%0A ${CLIENT_URL}`;
    const url = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=сайт+музею-майстерні+Іван+Кавалерідзе&body=${message}&ui=2&tf=1&pli=1`;
    window.open(url, 'sharer', 'toolbar=no,status=no,width=648,height=395');
  };

  return (
    <Modal open={open} onClose={onCloseModal}>
      <StyledBox>
        <Stack p={2} alignItems="end">
          <IconButton color="inherit" aria-label="close modal button" sx={{ padding: 0 }} onClick={onCloseModal}>
            <SvgSpriteIcon svgSpriteId="burgerOpen_icon" />
          </IconButton>
        </Stack>
        <Box textAlign="center" pb={2}>
          <Typography variant="h3" maxWidth={{ xs: 169, md: '100%' }} mx="auto">
            Поділіться сайтом з друзями!
          </Typography>
        </Box>
        <Divider sx={{ borderColor: (theme) => theme.palette.gray.main }} />
        <Stack alignItems="center" px={2} pt={{ xs: 3, md: 4, lg: 5 }} pb={5} rowGap={{ xs: 2, md: 3, lg: 4 }}>
          <Typography maxWidth={{ xs: 216, md: 302 }} textAlign="center" fontWeight={500}>
            Надішліть посилання на сайт через cоціальні мережі
          </Typography>
          <Stack direction="row" gap={{ xs: 2, md: 4, lg: 4 }} width="100%" justifyContent="center">
            <FacebookShareButton url={CLIENT_URL}>
              <SocialMediaIcon alt="share via facebook" src={facebook} />
            </FacebookShareButton>
            <TelegramShareButton url={CLIENT_URL}>
              <SocialMediaIcon alt="share via telegram" src={telegram} />
            </TelegramShareButton>
            <ViberShareButton url={CLIENT_URL}>
              <SocialMediaIcon alt="share via viber" src={viber} />
            </ViberShareButton>
            <IconButton aria-label="share via gmail" sx={{ p: 0 }} onClick={onClickGmailBtn}>
              <SocialMediaIcon alt="share via gmail" src={gmail} />
            </IconButton>
          </Stack>
          <Typography textAlign="center" fontWeight={500}>
            або скопіюйте лінк
          </Typography>
          <StyledTextButton variant="text" svgSpriteId="share_icon" title="  Скопіювати посилання" />
        </Stack>
      </StyledBox>
    </Modal>
  );
};

export default ShareModal;
