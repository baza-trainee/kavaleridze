import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';
import SvgSpriteIcon from './SvgSpriteIcon';

interface PrimaryButtonProps extends ButtonProps {
  title: string;
  svgSpriteId: string;
  componentWidth?: number;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ title, svgSpriteId, componentWidth, ...props }) => {
  return (
    <Button
      variant="primary"
      endIcon={<SvgSpriteIcon svgSpriteId={svgSpriteId} fontSize="small" />}
      sx={{ width: `${componentWidth}px` }}
      {...props}>
      {title}
    </Button>
  );
};

export default PrimaryButton;
