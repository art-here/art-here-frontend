import { useRecoilState } from "recoil";
import CategoriesView from "./View";
import { galleryArts } from "../../store/gallery";
import { TCategories } from "../../pages/Home/Gallery/types";

const Categories = ({
  setNextQuery
}: {
  setNextQuery: React.Dispatch<
    React.SetStateAction<{
      nextRevisionDateIdx?: string;
      nextIdx: number;
    } | null>
  >;
}) => {
  const [categorizedArts, setCategorizedArts] = useRecoilState(galleryArts);

  const onSelectCategory = (name: TCategories) => {
    if (categorizedArts.categoryName === name) return;
    setNextQuery(null);
    setCategorizedArts({ categoryName: name, categorizedArts: [] });
  };

  const Props: CategoriesProps = {
    selectedCategory: categorizedArts.categoryName,
    onSelectCategory
  };
  return <CategoriesView {...Props} />;
};

export default Categories;

export interface CategoriesProps {
  selectedCategory: TCategories;
  onSelectCategory: (name: TCategories) => void;
}
