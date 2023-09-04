import { Box, Container, Typography } from '@mui/material';
import { FC } from 'react';
import Section from '../Section/Section';

const Home: FC = () => {
  return (
    <>
      <Section variant="light">
        <Container>
          <Box sx={{ height: '200px' }}>
            <Typography variant="h2">Головна</Typography>
          </Box>

          <Box sx={{ height: '200px' }}>
            <Typography variant="h2">Перша секція</Typography>
          </Box>
          <Box sx={{ height: '200px' }}>
            <Typography variant="h2">Друга секція</Typography>
          </Box>
          <Box sx={{ height: '200px' }}>
            <Typography variant="h2">Третя секція</Typography>
          </Box>
        </Container>
      </Section>
      <Section variant="dark">
        <Container>
          <Box sx={{ height: '200px' }}>
            <Typography variant="h2">Четверта секція</Typography>
          </Box>
        </Container>
      </Section>
      <Section variant="light">
        <Container>
          <Box py={2}>
            <Typography variant="h2">П'ята секція</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro temporibus eligendi maxime rem illum magnam quisquam quidem
              molestiae, cum quia, recusandae nulla possimus officiis laborum nisi, quas quos cumque alias repellat praesentium provident
              minima qui? Qui, accusamus iste voluptatem error aspernatur aut quo ipsum quas voluptate assumenda sunt atque at? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Ut, debitis voluptate commodi, expedita repellat laboriosam aliquam ex, dolorum
              eum earum at reprehenderit exercitationem assumenda mollitia explicabo blanditiis. Deserunt odit tempora a numquam laborum
              necessitatibus corrupti ipsa libero ex aliquam, obcaecati totam? Excepturi, nihil? Soluta minus odit ipsum laboriosam, quaerat
              voluptatem?s
            </Typography>
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default Home;
