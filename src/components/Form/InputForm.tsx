import { FormHelperText, InputLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { memo, useEffect, useState } from 'react';

import { Controller } from 'react-hook-form';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';
import TooltipInfo from './TooltipInfo';

const InputForm = ({ placeholder, control, name, height, alert, label, error }: any) => {
  const [color, setColor] = useState('black');

  useEffect(() => {
    setColor(!!error ? 'red' : 'black');
  }, [!!error]);

  return (
    <Box sx={{ position: 'relative', color: { color } }}>
      <InputLabel
        sx={{
          color: { color },
        }}>
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
            fullWidth
            autoComplete="off"
            sx={{
              '& .MuiInputBase-root': { opacity: 1, alignItems: 'start', background: 'none' },
              '& .css-17cvodc-MuiInputBase-input-MuiOutlinedInput-input': {
                color: 'black',
                background: 'none',
                p: '7px  15px',
              },
              '& .css-1ly492x-MuiInputBase-root-MuiOutlinedInput-root': {
                color: (theme) => theme.palette.text.primary,
                position: 'relative',
                height: `${height}px`,
              },
              '& .css-vjwdvb-MuiOutlinedInput-notchedOutline ': {
                borderColor: { color },
              },
            }}
          />
        )}
      />
      <TooltipInfo color={color} alert={alert} />

      {error && (
        <Box sx={{ display: 'flex', gap: 1, color: 'red', position: 'absolute', bottom: '-30px' }}>
          <SvgSpriteIcon svgSpriteId="info_icon" />
          <FormHelperText sx={{ color: { color } }}>{error.message}</FormHelperText>
        </Box>
      )}
    </Box>
  );
};
export default memo(InputForm);
