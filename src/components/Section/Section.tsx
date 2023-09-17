import { Box, styled } from '@mui/material';
// import { FC, PropsWithChildren } from 'react';

interface SectionProps {
  variant: 'light' | 'dark';
}

const Section = styled(Box)<SectionProps>(({ theme, variant }) => ({
  backgroundColor: variant === 'light' ? theme.palette.common.white : theme.palette.common.black,
  color: variant === 'light' ? theme.palette.common.black : theme.palette.common.white,
}));

// const Section: FC<PropsWithChildren<SectionProps>> = ({ variant, children }) => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: (theme) => (variant === 'light' ? theme.palette.common.white : theme.palette.common.black),
//         color: (theme) => (variant === 'light' ? theme.palette.common.black : theme.palette.common.white),
//       }}>
//       {children}
//     </Box>
//   );
// };

export default Section;
