import { Button } from '@mui/material';
import { FC, MouseEventHandler } from 'react';
import SvgSpriteIcon from './SvgSpriteIcon';

interface PrimaryButtonProps {
  title: string;
  svgSpriteId: string;
  href: string;
  componentWidth?: number;
  onClick?: MouseEventHandler;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ title, svgSpriteId, componentWidth, href, onClick }) => {
  return (
    <Button
      href={href}
      target="_blank"
      variant="primary"
      onClick={onClick}
      endIcon={<SvgSpriteIcon svgSpriteId={svgSpriteId} fontSize="small" />}
      sx={{ width: `${componentWidth}px` }}>
      {title}
    </Button>
  );
};

export default PrimaryButton;
