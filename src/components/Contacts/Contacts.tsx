import { useTheme } from '@mui/material';
import { FC, useState } from 'react';
import { ContactButton, ContactItem, ContactLink, ContactList, ContactPaper, Text, Title } from './style.ts';

import data from '../../assets/siteData';
const Contacts: FC = () => {
  const theme = useTheme();
  const { phone, email } = data.general;
  const textHover = {
    ':hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
    },
  };
  return (
    <ContactPaper>
      <ContactList>
        <ContactItem>
          <Title variant="h3">Подзвонити до нас</Title>
          <ContactLink href={`tel:${phone}`} className="Blondie">
            <Text sx={textHover} variant="body1">
              {phone}
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
          <ContactButton sx={{ textHover }} variant="text">
            {email}
          </ContactButton>
        </ContactItem>
      </ContactList>
    </ContactPaper>
  );
};

export default Contacts;
