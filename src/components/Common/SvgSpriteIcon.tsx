import { SvgIcon, SvgIconProps } from '@mui/material';
import { FC } from 'react';

interface SvgSpriteIconProps extends SvgIconProps {
  svgSpriteId: string;
  fontSize?: 'small' | 'medium' | 'large';
}

const SvgSpriteIcon: FC<SvgSpriteIconProps> = ({ svgSpriteId, fontSize = 'small', ...props }) => {
  return (
    <SvgIcon fontSize={fontSize} {...props}>
      <use href={`/sprite.svg#${svgSpriteId}`}></use>
    </SvgIcon>
  );
};

export default SvgSpriteIcon;
