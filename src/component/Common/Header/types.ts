export interface INavbarProps {
  titles: string[];
}

export interface IUserbarProps {
  isUserMenuOpen: boolean;
  onUserMenuOpen: () => void;
  onLogout: () => void;
  userName?: string;
  userImage?: string;
}
