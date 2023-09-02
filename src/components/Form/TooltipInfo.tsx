import { IconButton, Tooltip, TooltipProps, Typography, tooltipClasses } from '@mui/material';
import { Box, styled } from '@mui/system';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';

const MyTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} arrow classes={{ popper: className }} />)(
  ({ theme }) => ({
    width: '190px',
    opacity: 1,
    [theme.breakpoints.up('md')]: {
      width: '292px',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      color: theme.palette.common.black,
    },
  })
);

function TooltipInfo({ alert }: any) {
  return (
    <Box sx={{ position: 'absolute', right: '8px', top: { xs: '38px', lg: '40px' } }}>
      <MyTooltip
        enterTouchDelay={1}
        placement={'top-start'}
        title={
          <Typography variant="body1" sx={{ fontSize: { xs: '14px', md: '16px' } }}>
            {alert}
          </Typography>
        }>
        <IconButton sx={{ color: 'inherit' }}>
          <SvgSpriteIcon svgSpriteId="info_icon" />
        </IconButton>
      </MyTooltip>
    </Box>
  );
}
export default TooltipInfo;
