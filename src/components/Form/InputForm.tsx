import { FormHelperText, InputLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { memo, useEffect, useState } from 'react';

import { Controller } from 'react-hook-form';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';
import TooltipInfo from './TooltipInfo';

const InputForm = ({ placeholder, control, name, alert, label, error, id, rows, isMulti = false }: any) => {
  const [color, setColor] = useState('black');

  useEffect(() => {
    setColor(error ? 'red' : 'black');
  }, [error]);
  // console.log(1);
  return (
    <Box sx={{ position: 'relative', color: { color } }}>
      <InputLabel sx={{ marginBottom: '8px', color: 'inherit', fontSize: { xs: '16px', lg: '18px', fontWeight: '600' } }}>
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            placeholder={placeholder}
            variant="outlined"
            onMouseLeave={() => setColor(error ? 'red' : 'black')}
            onMouseEnter={() => setColor(error ? 'red' : '#D8A629')}
            onFocus={() => setColor(error ? 'red' : '#D8A629')}
            fullWidth
            multiline={isMulti}
            error={!!error}
            size="medium"
            autoComplete="off"
            rows={rows}
          />
        )}
      />
      <TooltipInfo color={color} alert={alert} />

      {!!error && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 1,
            color: { color },
            marginTop: '8px',
          }}>
          <SvgSpriteIcon svgSpriteId="info_icon" />
          <FormHelperText sx={{ margin: '0px', color: { color }, fontSize: '16px' }}>{error.message}</FormHelperText>
        </Box>
      )}
    </Box>
  );
};

export default memo(InputForm);
