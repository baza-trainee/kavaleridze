import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Button, Paper } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputForm from './InputForm';
interface IFormInput {
  name: string;
  surname: string;
  email: string;
  text: string;
}

export default function Form() {
  const validateSchemaFullName = yup
    .string()
    .max(30, 'Ви ввели забагато симловів')
    .min(2, 'Ви ввели замало символів')
    .matches(/^[^0-9]*$/, 'Ваодити цифри заборонино')
    .matches(/^[a-zA-Z0-9а-яА-Я\sґїієЯҐІЇЄ'ʼ-]*$/, 'Ваодити символи заборонино')
    .required("Обов'язкове поле");

  const validateSchema = yup.object().shape({
    name: validateSchemaFullName,
    surname: validateSchemaFullName,
    email: yup.string().email('Невалідна пошта').required("Обов'язкове поле"),
    text: yup.string().min(30, 'Ви ввели замало символів').max(500, 'Ви ввели забагато симловів').required("Обов'язкове поле"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      text: '',
    },
    resolver: yupResolver(validateSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  console.log(1);
  return (
    <Paper sx={{ width: '640px', height: '700px', background: 'white' }} elevation={3}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ color: 'black', display: 'flex', flexDirection: 'column', gap: '40px', p: '40px' }}>
          <InputForm
            control={control}
            error={errors.name}
            placeholder={'Введіть ваше Імʼя'}
            name={'name'}
            label={'Імʼя*'}
            alert={'Це поле має містити від 2 до 30 символів. Допустимі символи: букви, пробіл, крапка, тире, апостроф'}
          />

          <InputForm
            control={control}
            error={errors?.surname}
            placeholder={'Введіть ваше Прізвище'}
            label={'Прізвище*'}
            name={'surname'}
            alert={'Це поле має містити від 2 до 30 символів. Допустимі символи: букви, пробіл, крапка, тире, апостроф'}
          />

          <InputForm
            control={control}
            error={errors.email}
            placeholder={'Введіть вашу Електронну адресу'}
            label={'Електронна адреса*'}
            name={'email'}
            alert={'Некоректно введені дані. Вкажіть адресу у форматі example@example.com'}
          />

          <InputForm
            control={control}
            error={errors.text}
            height={180}
            placeholder={'Введіть вашу Електронну адресу'}
            label={'Електронна адреса*'}
            name={'text'}
            alert={'Це поле має містити від 50 до 300 символів.'}
          />
          <Box sx={{ m: '0 auto' }}>
            <Button
              type="submit"
              sx={{
                width: '404px',
                background: isValid ? '' : '#CACACA',
                cursor: isValid ? 'pointer' : 'not-allowed',
                ':hover': {
                  background: isValid ? '' : '#CACACA',
                },
              }}>
              Відправити
            </Button>
          </Box>
        </Box>
      </form>
    </Paper>
  );
}
