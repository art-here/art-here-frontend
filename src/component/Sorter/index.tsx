import { useNavigate } from 'react-router-dom';
import { ISorterProps } from './types';
import SorterView from './View';

const Sorter = () => {
  const navigator = useNavigate();
  const SorterViewProps: ISorterProps = {
    onClickMap: () => {
      navigator('/home/map');
    },
    onClickGallery: () => {
      navigator('/home');
    },
  };
  return <SorterView {...SorterViewProps} />;
};

export default Sorter;
