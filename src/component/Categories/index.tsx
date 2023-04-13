import { useState } from "react";
import CategoriesView from "./View";
import { CATEGORIES } from "../../constants/categories";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES.ALL);

  const selectCategory = (name: string) => {
    setSelectedCategory(name);
  };
  const Props: CategoriesProps = {
    selectedCategory,
    selectCategory
  };
  return <CategoriesView {...Props} />;
};

export default Categories;

export interface CategoriesProps {
  selectedCategory: string;
  selectCategory: (name: string) => void;
}
