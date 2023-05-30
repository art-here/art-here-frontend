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
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: absolute;
  top: -2rem;
  left: 1.5rem;

  ${({ theme }) => theme.media.tablet} {
    top: -2.5rem;
  }
  ${({ theme }) => theme.media.mobile} {
    width: 90%;
    top: 0rem;
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

  ${({ theme }) => theme.media.mobile} {
    font-size: 14px;
    height: 2rem;
  }
`;
