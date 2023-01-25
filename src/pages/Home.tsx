import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';
import LayoutView from '../component/Common/LayoutView';
import Searcher from '../component/Searcher';
import Sorter from '../component/Sorter';

const Home = () => {
  return (
    <LayoutView>
      <Header />
      <Searcher />
      <Sorter />
      <Outlet />
    </LayoutView>
  );
};

export default Home;
