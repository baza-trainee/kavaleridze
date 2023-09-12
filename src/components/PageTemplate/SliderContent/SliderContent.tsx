import { FC } from 'react';
import { Box, Typography, Grid } from '@mui/material';

const SliderContent: FC = () => {
  return (
    <Grid item xs={12}>
      {/* Temporary data */}
      <Box sx={{ height: { xs: 156, md: 369, lg: 600 }, backgroundColor: (theme) => theme.palette.gray.dark }}>
        <Typography variant="h2" sx={{ color: (theme) => theme.palette.text.primary }}>
          Slider
        </Typography>
      </Box>
    </Grid>
  );
};

export default SliderContent;
