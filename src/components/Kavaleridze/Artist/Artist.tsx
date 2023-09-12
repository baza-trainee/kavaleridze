import { FC } from 'react';
import PageTemplate from '../../PageTemplate/PageTemplate';
import { artistData } from '../../../assets/tempData/staticInfo/artist';

const Artist: FC = () => {
  return <PageTemplate data={artistData} />;
};

export default Artist;
