import { FC } from 'react';
import { Grid, Box, Typography } from '@mui/material';

interface ImageContentProps {
  imageLink: string;
  imageLabel?: string;
  columns: 1 | 2;
}

const ImageContent: FC<ImageContentProps> = ({ columns, imageLink, imageLabel }) => {
  return (
    <Grid item xs={12} md={columns === 1 ? 6 : 12}>
      <Box component="img" src={imageLink} alt={imageLabel || 'картинка до сторінки'} width="100%" />
      {imageLabel && (
        <Typography variant="imageLabel" component="p" mt={{ xs: 1, lg: 2 }}>
          {imageLabel}
        </Typography>
      )}
    </Grid>
  );
};

export default ImageContent;
