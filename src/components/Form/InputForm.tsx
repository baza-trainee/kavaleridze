import { FormHelperText, InputLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { memo, useEffect, useState } from 'react';

import { Controller } from 'react-hook-form';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';
import TooltipInfo from './TooltipInfo';

const InputForm = ({ placeholder, control, name, alert, label, error, isMulti = false }: any) => {
  const [color, setColor] = useState('black');

  useEffect(() => {
    setColor(!!error ? 'red' : 'black');
  }, [!!error]);

  return (
    <Box sx={{ position: 'relative', color: { color } }}>
      <InputLabel sx={{ color: 'inherit', fontSize: { xs: '16px', md: '18px', fontWeight: '600' } }}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            placeholder={placeholder}
            variant="outlined"
            fullWidth
            multiline={isMulti}
            error={!!error}
            size="medium"
            autoComplete="off"
            sx={{
              '& .MuiInputBase-root': { opacity: 1, alignItems: 'start', background: 'none' },
              '& .css-17cvodc-MuiInputBase-input-MuiOutlinedInput-input': {
                color: 'black',
                p: '7px  10px',
              },
            }}
          />
        )}
      />
      <TooltipInfo color={color} alert={alert} />

      {error && (
        <Box sx={{ display: 'flex', gap: 1, color: { color }, position: 'absolute', bottom: '-36px' }}>
          <SvgSpriteIcon svgSpriteId="info_icon" />
          <FormHelperText sx={{ color: { color }, fontSize: '16px' }}>{error.message}</FormHelperText>
        </Box>
      )}
    </Box>
  );
};
export default memo(InputForm);
