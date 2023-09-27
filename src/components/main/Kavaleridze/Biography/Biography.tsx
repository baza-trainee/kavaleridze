import { FC } from 'react';
import PageTemplate from '../../PageTemplate/PageTemplate';
import { biographyDate } from '@/assets/tempData/staticInfo/biography';

const Biography: FC = () => {
  return <PageTemplate data={biographyDate} />;
};

export default Biography;
