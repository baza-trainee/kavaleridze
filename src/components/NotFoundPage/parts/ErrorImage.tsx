import { Box } from '@mui/material';
import { FC } from 'react';

interface ErrorImageProps {
  image: string;
}
const ErrorImage: FC<ErrorImageProps> = ({ image }) => {
  return (
    <Box
      component={'img'}
      src={image}
      alt="not found image"
      sx={{
        position: 'absolute',
        zIndex: '0',
        top: 0,
        left: {
          lg: 0,
          md: '2%',
          sm: 0,
        },
        width: {
          lg: '400px',
          md: '360px',
          sm: '160px',
        },
      }}
    />
  );
};

export default ErrorImage;
