import { IconButton, Tooltip, TooltipProps, Typography, tooltipClasses } from '@mui/material';
import { Box, styled } from '@mui/system';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';

const MyTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} arrow classes={{ popper: className }} />)(() => ({
  width: '250px',
  opacity: 1,
  [`& .${tooltipClasses.tooltip}`]: {
    color: '#EEEEEE',
  },
}));

function TooltipInfo({ alert }: any) {
  return (
    <Box sx={{ position: 'absolute', right: '8px', top: '38px' }}>
      <MyTooltip enterTouchDelay={1} placement={'top-start'} title={<Typography variant="body1">{alert}</Typography>}>
        <IconButton sx={{ color: 'inherit' }}>
          <SvgSpriteIcon svgSpriteId="info_icon" />
        </IconButton>
      </MyTooltip>
    </Box>
  );
}
export default TooltipInfo;
