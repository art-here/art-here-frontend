export type TProperyForSearch = "artName" | "oldAddress" | "roadAddress";
export type TPROPERTIES_SEARCH = {
  property: TProperyForSearch;
  propertyTitle: string;
};

export interface ISearcherProps {
  selectValue: string;
  PROPERTIES_SEARCH: TPROPERTIES_SEARCH[];
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
