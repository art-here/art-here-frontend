import { MENU_TITLE } from "../../../constants";
import { SMenu, SMenuItem, SMenuItemLink } from "./Navbar.style";

export default function Navbar() {
  return (
    <SMenu>
      {MENU_TITLE.map((title, idx) => {
        return (
          <SMenuItem key={idx}>
            <SMenuItemLink to={`/${title.toLowerCase()}`}>
              {title}
            </SMenuItemLink>
          </SMenuItem>
        );
      })}
    </SMenu>
  );
}
