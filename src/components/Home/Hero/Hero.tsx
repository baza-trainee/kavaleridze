import { FC, useState } from 'react';
import { ContentBlock, Title, WrapperContent } from './style.js';
import data from '../../../assets/siteData';
import GeneralButton from '../../GeneralButton/GeneralButton.js';
import ShareModal from './ShareModal/ShareModal.js';

const Hero: FC = () => {
  const { mainTitle } = data.general;
  const { share } = data.buttonsLabels;
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);

  const onCloseModal = () => setOpen(false);

  return (
    <>
      <WrapperContent>
        <ContentBlock>
          <Title variant="title">{mainTitle}</Title>
          <GeneralButton
            sx={{ color: 'white', borderColor: 'white', backgroundColor: 'transparent!important' }}
            title={share}
            svgSpriteId="share_icon"
            variant="secondary"
            onClick={onOpenModal}
          />
        </ContentBlock>
      </WrapperContent>
      <ShareModal onCloseModal={onCloseModal} open={open} />
    </>
  );
};

export default Hero;
