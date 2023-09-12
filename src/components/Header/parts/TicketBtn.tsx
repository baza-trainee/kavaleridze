import { FC, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import data from '../../../assets/siteData';

interface TicketBtnProps {
  additionalClickFn?: () => void;
}

const TicketBtn: FC<TicketBtnProps> = ({ additionalClickFn }) => {
  const navigate = useNavigate();

  const onClickBtn = (e: MouseEvent) => {
    e.preventDefault();
    navigate('/tickets');
    if (additionalClickFn) {
      additionalClickFn();
    }
  };

  return (
    <PrimaryButton
      href="/tickets"
      svgSpriteId="ticket_icon"
      title={data.buttonsLabels.tickets}
      onClick={onClickBtn}
      sx={{ width: { xs: 280, lg: 'auto' } }}
    />
  );
};

export default TicketBtn;
