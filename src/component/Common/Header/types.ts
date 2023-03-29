export interface INavbarProps {
  titles: string[];
}

export interface IUserbarProps {
  onAuthOpen: () => void;
  userName?: string;
  userImage?: string;
}
