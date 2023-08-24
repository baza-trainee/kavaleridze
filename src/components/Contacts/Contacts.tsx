import { FC } from 'react';
import { ContactList, ContactItem, Title, Text, ContactPaper } from './style.js';
const Contacts: FC = () => {
  return (
    <ContactPaper>
      <ContactList>
        <ContactItem>
          <Title variant="h3">Подзвонити до нас</Title>
          <Text variant="body1">044 – 425-33-97</Text>
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
          <Text variant="body1">kavaleridzemuseum@gmail.com</Text>
        </ContactItem>
      </ContactList>
    </ContactPaper>
  );
};

export default Contacts;
