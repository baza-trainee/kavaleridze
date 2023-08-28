import { IconButton, Tooltip, TooltipProps, tooltipClasses } from '@mui/material';
import { Box, styled } from '@mui/system';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';

const MyTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} arrow classes={{ popper: className }} />)(
  ({ theme }) => ({
    width: '150px',
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {},
  })
);

function TooltipInfo({ alert }: any) {
  return (
    <Box sx={{ position: 'absolute', right: '8px', top: '26px' }}>
      <MyTooltip enterTouchDelay={1} placement={'top-start'} title={alert}>
        <IconButton sx={{ color: 'inherit' }}>
          <SvgSpriteIcon svgSpriteId="info_icon" />
        </IconButton>
      </MyTooltip>
    </Box>
  );
}
export default TooltipInfo;
