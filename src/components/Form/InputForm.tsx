import { FormHelperText, InputLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { memo, useEffect, useState } from 'react';

import { Controller } from 'react-hook-form';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';
import TooltipInfo from './TooltipInfo';

const InputForm = ({ placeholder, control, name, alert, label, error, isMulti = false }: any) => {
  const [color, setColor] = useState('black');
  const [colorFocus, setColorFocus] = useState(false);
  const changeColorLeve = () => {
    if (!colorFocus) {
      setColor(!!error ? 'red' : 'black');
    }

    // setColor(!!error ? 'red' : '#D8A629');
  };
  const changeColorEnt = () => {
    // () => setColor(!!error ? 'red' : 'black');
    if (colorFocus) {
      setColor(!!error ? 'red' : '#878684');
    }
  };

  useEffect(() => {
    setColor(!!error ? 'red' : 'black');
  }, [!!error]);
  console.log(1);
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
            onMouseLeave={changeColorLeve}
            onMouseEnter={changeColorEnt}
            onFocus={() => {
              setColor(!!error ? 'red' : '#D8A629');
              setColorFocus(!colorFocus);
            }}
            // onBlur={() => setColorFocus(!colorFocus)}
            fullWidth
            multiline={isMulti}
            error={!!error}
            size="medium"
            autoComplete="off"
          />
        )}
      />
      <TooltipInfo color={color} alert={alert} />

      {!!error && (
        <Box sx={{ display: 'flex', gap: 1, color: { color }, position: 'absolute', bottom: '-36px' }}>
          <SvgSpriteIcon svgSpriteId="info_icon" />
          <FormHelperText sx={{ color: { color }, fontSize: '16px' }}>{error.message}</FormHelperText>
        </Box>
      )}
    </Box>
  );
};
export default memo(InputForm);
