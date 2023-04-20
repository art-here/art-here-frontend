import styled from "@emotion/styled";
import { CategoriesProps } from "..";
import { CATEGORIES } from "../../../constants/categories";

const CategoriesView = ({
  selectedCategory,
  onSelectCategory
}: CategoriesProps) => {
  return (
    <Container>
      {CATEGORIES.map((value, idx) => {
        return (
          <Category
            key={`${idx}-${value}`}
            onClick={() => onSelectCategory(value)}
            className={selectedCategory === value ? "on" : ""}
          >
            {value}
          </Category>
        );
      })}
    </Container>
  );
};

export default CategoriesView;

const Container = styled.div`
  position: absolute;
  top: -1.5rem;
  left: 1.5rem;

  @media (max-width: 1024px) {
    top: -2.5rem;
  }
  @media (max-width: 480px) {
    top: -1.5rem;
  }
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

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
