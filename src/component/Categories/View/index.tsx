import styled from "@emotion/styled";
import { CATEGORIES } from "../../../constants/categories";
import { CategoriesProps } from "..";

const CategoriesView = ({
  selectedCategory,
  selectCategory
}: CategoriesProps) => {
  return (
    <Container>
      {Object.entries(CATEGORIES).map(([key, value], idx) => (
        <Category
          key={`${key}-${idx}`}
          onClick={() => selectCategory(value)}
          className={selectedCategory === value ? "on" : ""}
        >
          {value}
        </Category>
      ))}
    </Container>
  );
};

export default CategoriesView;

const Container = styled.div`
  position: absolute;
  top: 9em;
  left: 1.5rem;
`;

const Category = styled.button`
  margin-left: 0.5rem;
  min-width: 3rem;
  height: 2.3rem;
  color: #69696a;
  font-weight: 700;
  font-size: 16px;
  background-color: #fff;
  border-radius: 12px;
  border: none;

  &:hover,
  &.on {
    cursor: pointer;
    color: #000;
    background-color: #f3f3f4;
  }
`;
