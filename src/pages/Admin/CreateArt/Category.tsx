import styled from "@emotion/styled";
import { CATEGORIES } from "../../../constants/admin/categories";
import { ErrorMessage } from "./InputField";

type TCategoryProps = {
  validationError: string;
};

const Category = ({ validationError }: TCategoryProps) => {
  return (
    <>
      <Container name="category">
        {CATEGORIES.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Container>
      {validationError && <ErrorMessage>{validationError}</ErrorMessage>}
    </>
  );
};

export default Category;

const Container = styled.select`
  width: 50%;
  border: 1px solid #ececec;
  border-radius: 8px;

  padding-right: 0.5rem;
  margin: 0.2rem 0;
`;
