import { useRecoilState, useSetRecoilState } from "recoil";
import CategoriesView from "./View";
import { galleryArts, searchedArts, userCategory } from "../../store/gallery";
import { TCategories } from "../../pages/Home/Gallery/types";

const Categories = ({
  setNextQuery
}: {
  setNextQuery:
    | React.Dispatch<
        React.SetStateAction<{
          date?: string;
          idx?: number;
        } | null>
      >
    | React.Dispatch<
        React.SetStateAction<{
          idx?: number;
        } | null>
      >;
}) => {
  const [category, setUserCategory] = useRecoilState(userCategory);
  const setGalleryArts = useSetRecoilState(galleryArts);
  const setSearchedArts = useSetRecoilState(searchedArts);

  const onSelectCategory = (categoryName: TCategories) => {
    if (category === categoryName) return;
    setGalleryArts([]);
    setSearchedArts([]);
    setNextQuery(null);
    setUserCategory(categoryName);
  };

  const Props: CategoriesProps = {
    selectedCategory: category,
    onSelectCategory
  };
  return <CategoriesView {...Props} />;
};

export default Categories;

export interface CategoriesProps {
  selectedCategory: TCategories;
  onSelectCategory: (name: TCategories) => void;
}
