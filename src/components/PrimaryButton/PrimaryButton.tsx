import { Box, Button } from '@mui/material';
import { FC } from 'react';
import SvgSpriteIcon from './SvgSpriteIcon';

interface PrimaryButtonProps {
  title: string;
  svgSpriteId: string;
  href: string;
  componentWidth?: number;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ title, svgSpriteId, href, componentWidth }) => {
  return (
    <Box>
      <Button
        href={href}
        target="_blank"
        variant="primary"
        endIcon={<SvgSpriteIcon svgSpriteId={svgSpriteId} fontSize="small" />}
        sx={{ width: `${componentWidth}px` }}>
        {title}
      </Button>
    </Box>
  );
};

export default PrimaryButton;
