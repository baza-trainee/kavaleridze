import { FC } from 'react';
import PageTemplate from '../../PageTemplate/PageTemplate';
import { kyivData } from '@/assets/tempData/staticInfo/kyiv';

const Kyiv: FC = () => {
  return <PageTemplate data={kyivData} />;
};

export default Kyiv;
