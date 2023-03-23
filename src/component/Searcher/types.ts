export type TProperyForSearch = "name" | "address";

export type TPROPERTIES_SEARCH = {
  property: TProperyForSearch;
  propertyTitle: string;
};

export interface ISearcherProps {
  // selectValue: string;
  PROPERTIES_SEARCH: TPROPERTIES_SEARCH[];
  // onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}
