import { Container } from '@mui/material';
import { FC, MouseEventHandler } from 'react';

import { useNavigate } from 'react-router-dom';

import Section from '../Section/Section';
import ErrorImage from './parts/ErrorImage';
import NavToMainPageBtn from './parts/NavToMainPageBtn';
import { ContentBox, Error404Box, ImageBox, SupportSubTitle, SupportTextBox, SupportTitle, Text404 } from './styledComponents';

import image from '/404.png';

const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  const handleClick: MouseEventHandler<HTMLButtonElement> | undefined = (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <Section variant="light">
      <Container>
        <ContentBox>
          <Error404Box>
            <ImageBox>
              <ErrorImage image={image} />
              <Text404 component={'p'} variant="body2Kyiv">
                404
              </Text404>
            </ImageBox>
          </Error404Box>
          <SupportTextBox>
            <SupportTitle variant="h1">Вибачте, але сторінку не знайдено</SupportTitle>
            <SupportSubTitle>Сторінка, яку ви шукаєте видалена або тимчасово недоступна</SupportSubTitle>
          </SupportTextBox>
          <NavToMainPageBtn onClick={handleClick} />
        </ContentBox>
      </Container>
    </Section>
  );
};

export default NotFoundPage;
