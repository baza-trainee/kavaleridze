import { SvgIcon, SvgIconProps } from '@mui/material';
import { FC } from 'react';

interface SvgSpriteIconProps extends SvgIconProps {
  svgSpriteId: string;
}

const SvgSpriteIcon: FC<SvgSpriteIconProps> = ({ svgSpriteId, ...props }) => {
  return (
    <SvgIcon {...props}>
      <use href={`/sprite.svg#${svgSpriteId}`}></use>
    </SvgIcon>
  );
};

export default SvgSpriteIcon;
