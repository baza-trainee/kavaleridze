import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';

interface GeneralButton extends ButtonProps {
  title: string;
  svgSpriteId: string;
  variant?: 'primary' | 'secondary';
}

const GeneralButton: FC<GeneralButton> = ({ title, svgSpriteId, variant = 'primary', ...props }) => {
  return (
    <Button variant={variant} {...props} endIcon={<SvgSpriteIcon svgSpriteId={svgSpriteId} fontSize="small" />}>
      {title}
    </Button>
  );
};

export default GeneralButton;
