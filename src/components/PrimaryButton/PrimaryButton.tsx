import { Button, ButtonProps } from '@mui/material';
import { LinkProps } from 'react-router-dom';
import { FC } from 'react';
import SvgSpriteIcon from './SvgSpriteIcon';

interface PrimaryButtonProps extends ButtonProps {
  title: string;
  svgSpriteId: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ title, svgSpriteId, ...props }) => {
  return (
    <Button variant="primary" {...props} endIcon={<SvgSpriteIcon svgSpriteId={svgSpriteId} fontSize="small" />}>
      {title}
    </Button>
  );
};

export default PrimaryButton;
