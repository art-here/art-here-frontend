export type TOptioinForSearch = "name" | "address";

export type T_OPTIONS_SEARCH = {
  option: TOptioinForSearch;
  optionName: string;
};

export type ISearcherProps = {
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
};
