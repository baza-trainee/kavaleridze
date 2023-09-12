import { FC } from 'react';
import PageTemplate from '../../PageTemplate/PageTemplate';
import { sculptureData } from '../../../assets/tempData/staticInfo/sculpture';

const Sculpture: FC = () => {
  return <PageTemplate data={sculptureData} />;
};

export default Sculpture;
