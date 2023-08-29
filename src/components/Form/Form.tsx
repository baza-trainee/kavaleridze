import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Button, Dialog, IconButton, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';
import InputForm from './InputForm';
interface IFormInput {
  name: string;
  surname: string;
  email: string;
  text: string;
}

export default function Form({ handleClose, open }: any) {
  const validateSchemaFullName = yup
    .string()
    .trim()
    .max(30, 'Ви ввели забагато симловів')
    .min(2, 'Ви ввели замало символів')
    .matches(/^[^0-9]*$/, 'Ваводити цифри заборонино')
    .matches(/^[a-zA-Z0-9а-яА-Я\sґїієЯҐІЇЄ'ʼ-]*$/, 'Ваодити символи заборонино')
    .required("Обов'язкове поле");

  const validateSchema = yup.object().shape({
    name: validateSchemaFullName,
    surname: validateSchemaFullName,
    email: yup.string().trim().email('Невалідна пошта').required("Обов'язкове поле"),
    text: yup.string().trim().min(10, 'Ви ввели замало символів').max(300, 'Ви ввели забагато симловів').required("Обов'язкове поле"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
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

  return (
    <Dialog
      PaperProps={{ style: { padding: '0px', margin: '0px' } }}
      sx={{
        padding: '10px',
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: { xs: '640px', md: '640px', lg: '840px' },
            margin: 3,
          },
        },
      }}
      onClose={handleClose}
      open={open}>
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '640px', md: '640px', lg: '840px' },
          background: (theme) => theme.palette.common.white,
          color: 'black',
          position: 'relative',
          m: '0 auto',
        }}>
        <IconButton
          onClick={handleClose}
          aria-label="close form"
          color="inherit"
          sx={{
            position: 'absolute',
            top: '24px',
            right: '24px',
          }}>
          <SvgSpriteIcon fontSize="medium" svgSpriteId="burgerOpen_icon" />
        </IconButton>

        <Typography
          sx={{ m: '0 auto', pt: 10, textAlign: 'center', width: { xs: '230px', md: '334px' }, fontSize: { xs: '18px', md: '24px' } }}>
          Ми будемо раді отримати від Вас повідомлення!
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              p: { xs: '16px', md: '48px' },
            }}>
            <InputForm
              control={control}
              error={errors.name}
              placeholder={'Олена'}
              name={'name'}
              label={'Імʼя*'}
              alert={'Це поле має містити від 2 до 30 символів. Допустимі символи: букви, пробіл, крапка, тире, апостроф'}
            />

            <InputForm
              control={control}
              error={errors?.surname}
              placeholder={'Петрова'}
              label={'Прізвище*'}
              name={'surname'}
              alert={'Це поле має містити від 2 до 30 символів. Допустимі символи: букви, пробіл, крапка, тире, апостроф'}
            />

            <InputForm
              control={control}
              error={errors.email}
              placeholder={'olenapetrova@gmail.com'}
              label={'Електронна адреса*'}
              name={'email'}
              alert={'Некоректно введені дані. Вкажіть адресу у форматі example@example.com'}
            />

            <InputForm
              control={control}
              error={errors.text}
              isMulti={true}
              placeholder={'Введіть Ваше повідомлення'}
              label={'Текст повідомлення*'}
              name={'text'}
              alert={'Це поле має містити від 10 до 300 символів.'}
            />

            <Button
              type="submit"
              sx={{
                m: '0 auto',
                width: { xs: '250px', md: '332px', lg: '440px' },
                background: isValid ? '' : '#CACACA',
                cursor: isValid ? 'pointer' : 'not-allowed',
                ':hover': {
                  background: isValid ? '' : '#CACACA',
                },
              }}>
              Відправити
            </Button>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
}
