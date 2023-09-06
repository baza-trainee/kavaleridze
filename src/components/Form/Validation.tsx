import * as yup from 'yup';

const validateSchemaFullName = yup
  .string()
  .trim()
  .required('Невірно введені дані.')
  .max(30, 'Ви ввели забагато симловів')
  .min(2, 'Недостатньо символів')
  .matches(/^[^0-9]*$/, 'Вводити цифри заборонино')
  .matches(/^[a-zA-Zа-яА-Яґєіїёў'-.\s]*$/, 'Введено недозволені символи');

export const validateSchema = yup.object().shape({
  name: validateSchemaFullName,
  surname: validateSchemaFullName,
  email: yup
    .string()
    .trim()
    .required('Невірно введені дані.')
    .matches(/^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Невірний формат вводу ел.пошти. Див.зразок')
    .email('Невірний формат вводу ел.пошти. Див.зразок'),
  text: yup
    .string()
    .trim()
    .required('Невірно введені дані.')
    .min(10, 'Не достатньо інформації для запиту')
    .max(300, 'Ви ввели забагато симловів'),
});
