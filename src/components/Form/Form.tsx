import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Dialog, IconButton, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';
import InputForm from './InputForm';
import { validateSchema } from './Validation';

export interface IFormInput {
  name: string;
  surname: string;
  email: string;
  text: string;
}

interface FeedBackFormProps {
  handleClose: () => void;
  open: boolean;
}

const FeedBackForm: FC<FeedBackFormProps> = ({ handleClose, open }) => {
  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
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
    reset();
  };

  return (
    <Dialog
      PaperProps={{ style: { padding: '0px', margin: '0px' } }}
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: { xs: '100%', md: '540px', lg: '568px' },
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
          color: (theme) => theme.palette.common.black,
          position: 'relative',
          m: '0 auto',
        }}>
        <IconButton
          onClick={() => {
            clearErrors();
            reset();
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
              alert={'Від 2 до 30 символів: букви, дефіс, крапка, апостроф, пробіл'}
            />

            <InputForm
              control={control}
              error={errors?.surname}
              placeholder={'Петрова'}
              label={'Прізвище*'}
              name={'surname'}
              alert={'Від 2 до 30 символів: букви, дефіс, крапка, апостроф, пробіл'}
            />

            <InputForm
              control={control}
              error={errors.email}
              placeholder={'olenapetrova@gmail.com'}
              label={'Електронна адреса*'}
              name={'email'}
              alert={'Формат example@google.com'}
            />

            <InputForm
              control={control}
              error={errors.text}
              isMulti={true}
              rows={6}
              placeholder={'Ваше повідомлення'}
              label={'Текст повідомлення*'}
              name={'text'}
              alert={'Від 10 до 300 символів'}
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
            <Button type="submit" variant="primary" disabled={!isValid} endIcon={<SvgSpriteIcon svgSpriteId="send_icon" />}>
              Відправити
            </Button>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
};

export default FeedBackForm;
