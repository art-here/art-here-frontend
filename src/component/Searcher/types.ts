export type TProperyForSearch = "name" | "address";

export type TPROPERTIES_SEARCH = {
  property: TProperyForSearch;
  propertyTitle: string;
};

export interface ISearcherProps {
  PROPERTIES_SEARCH: TPROPERTIES_SEARCH[];
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
}
