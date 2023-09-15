import { Box, Button } from '@mui/material';
import { FC, MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';

interface BackToEventsBtnProps {
  title: string;
}
const BackToEventsBtn: FC<BackToEventsBtnProps> = ({ title }) => {
  const navigate = useNavigate();
  const handleClick: MouseEventHandler<HTMLButtonElement> | undefined = (e) => {
    e.preventDefault();
    navigate('/events');
  };
  return (
    <Box sx={{ textAlign: 'center', paddingTop: { lg: '44px', md: '32px', sm: '24px' } }}>
      <Button variant="secondary" startIcon={<SvgSpriteIcon svgSpriteId="arrowLeft_icon" />} sx={{ minWidth: '0' }} onClick={handleClick}>
        {title}
      </Button>
    </Box>
  );
};

export default BackToEventsBtn;
