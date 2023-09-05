import { useTheme, Container } from '@mui/material';
import { FC, useState } from 'react';
import { BoxContact, ContactButton, ContactItem, ContactLink, ContactList, ContactPaper, Paragraph, Text, Title } from './style.ts';
import FeedBackForm from '../Form/Form.tsx';
import Section from '../Section/Section.tsx';
import data from '../../assets/siteData';

const Contacts: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const { phone, email } = data.general;
  const textHover = {
    ':hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
    },
  };
  return (
    <>
      <Section variant="light">
        <Container>
          <ContactPaper>
            <ContactList>
              <ContactItem>
                <Title variant="h3">Подзвонити до нас</Title>
                <ContactLink sx={textHover} href={`tel:${phone}`} className="Blondie">
                    {phone}
                </ContactLink>
              </ContactItem>
              <ContactItem>
                <Title variant="h3">Як нас знайти</Title>
                <BoxContact>
                  <Paragraph><strong>Метро:</strong> до станції «Контрактова площа», далі пройти пішки близько 1 км.</Paragraph>
                  <Paragraph>
                    <strong>Фунікулер:</strong> від станції «Поштова площа» піднятися до Михайлівської площі, далі пройти по вулиці Володимирській до
                    Андріївського узвозу, 21.
                  </Paragraph>
                  <Paragraph><strong>Автобус:</strong> 114; 119; 18ТР.</Paragraph>
                </BoxContact>
              </ContactItem>
              <ContactItem>
                <Title variant="h3">Написати нам</Title>
                <ContactButton onClick={handleClickOpen} sx={{ textHover }} variant="text">
                  {email}
                </ContactButton>
              </ContactItem>
            </ContactList>
          </ContactPaper>
        </Container>
      </Section>
      <FeedBackForm handleClose={handleClose} open={open} />
    </>
  );
};

export default Contacts;
