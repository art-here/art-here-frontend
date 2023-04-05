export interface INavbarProps {
  titles: string[];
}

export interface IUserbarProps {
  isUserMenuOpen: boolean;
  onAuthOpen: () => void;
  onUserMenuOpen: () => void;
  onLogout: () => void;
  userName?: string;
  userImage?: string;
}
