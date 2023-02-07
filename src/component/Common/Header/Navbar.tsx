import { MENU_TITLE } from "../../../constants";
import { INavbarProps } from "./types";
import NavbarView from "./View/NavbarView";

const Navbar = () => {
  const NavbarViewProps: INavbarProps = {
    titles: MENU_TITLE
  };
  return <NavbarView {...NavbarViewProps} />;
};

export default Navbar;
