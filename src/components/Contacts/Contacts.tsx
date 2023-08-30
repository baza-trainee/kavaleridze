import { useTheme } from '@mui/material';
import { FC, useState } from 'react';
import Form from '../Form/Form.tsx';
import { ContactButton, ContactItem, ContactLink, ContactList, ContactPaper, Text, Title } from './style.ts';

const Contacts: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const textHover = {
    ':hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
    },
  };
  return (
    <>
      <ContactPaper>
        <ContactList>
          <ContactItem>
            <Title variant="h3">Подзвонити до нас</Title>
            <ContactLink href="tel:+38(044)-425-33-97" className="Blondie">
              <Text sx={textHover} variant="body1">
                +38(044)-425-33-97
              </Text>
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <Title variant="h3">Як нас знайти</Title>
            <Text variant="body1">
              Метро (до станції «Контрактова площа», далі пройти пішки близько 1 км. Від станції «Поштова площа» піднятися на фунікулері до
              Михайлівської площі, далі пройти по вулиці Володимирській до Андріївського узвозу, 21); Автобус (114 119 18ТР)
            </Text>
          </ContactItem>
          <ContactItem>
            <Title variant="h3">Напишіть нам</Title>
            <ContactButton onClick={handleClickOpen} sx={{ textHover }} variant="text">
              kavaleridzemuseum@gmail.com
            </ContactButton>
          </ContactItem>
        </ContactList>
      </ContactPaper>
      <Form handleClose={handleClose} open={open} />
    </>
  );
};

export default Contacts;
