import Navbar from './Navbar';
import Userbar from './Userbar';
import HeaderView from './View/HeaderView';

const Header = () => {
  return (
    <HeaderView>
      <Navbar />
      <Userbar />
    </HeaderView>
  );
};

export default Header;
