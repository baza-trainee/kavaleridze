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
    .required('Невірно введені дані.')
    .max(30, 'Ви ввели забагато симловів')
    .min(2, 'Недостатньо символів')
    .matches(/^[^0-9]*$/, 'Ваводити цифри заборонино')
    .matches(/^[a-zA-Zа-яА-Яґєіїёў'-.\s]*$/, 'Введено недозволені символи');

  const validateSchema = yup.object().shape({
    name: validateSchemaFullName,
    surname: validateSchemaFullName,
    email: yup.string().trim().required('Невірно введені дані.').email('Невірний формат вводу ел.пошти. Див.зразок'),
    text: yup
      .string()
      .trim()
      .required('Невірно введені дані.')
      .min(10, 'Не достатньо інформації для запиту')
      .max(300, 'Ви ввели забагато симловів'),
  });

  const {
    control,
    handleSubmit,
    clearErrors,
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
            maxWidth: { xs: '288px', md: '540px', lg: '568px' },
          },
        },
      }}
      onClose={() => {
        clearErrors();
        handleClose();
      }}
      open={open}>
      <Box
        sx={{
          width: '100%',
          background: (theme) => theme.palette.common.white,
          color: 'black',
          position: 'relative',
          m: '0 auto',
        }}>
        <IconButton
          onClick={() => {
            clearErrors();
            handleClose();
          }}
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
          sx={{
            m: '0 auto',
            pt: 10,
            textAlign: 'center',
            width: { xs: '230px', md: '334px' },
            fontSize: { xs: '18px', md: '24px' },
            lineHeight: { xs: '24px', md: '36px' },
            letterSpacing: { xs: '-0.36px', md: '-0.48px' },
            fontWeight: '700',
          }}>
          Ми будемо раді отримати від Вас повідомлення!
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '48px', md: '36px' },
              paddingX: { xs: '16px', md: '70px', lg: '64px' },
              paddingTop: { xs: '32px', md: '16px', lg: '24px' },
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
              id="outlined-multiline-static"
              isMulti={true}
              rows={6}
              placeholder={'Ваше повідомлення'}
              label={'Текст повідомлення*'}
              name={'text'}
              alert={'Це поле має містити від 10 до 300 символів.'}
            />
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: { xs: '24px' },
              marginBottom: { xs: '48px', md: '24px' },
            }}>
            <Button
              type="submit"
              variant="primary"
              endIcon={<SvgSpriteIcon svgSpriteId="send_icon" />}
              sx={{
                width: { xs: '256px', md: '220px', lg: '328px' },
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
