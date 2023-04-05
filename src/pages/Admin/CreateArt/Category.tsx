import styled from "@emotion/styled";
import { CATEGORIES } from "../../../constants/admin/categories";

import { ChangeEvent, useEffect, useState } from "react";

type TCategoryProps = {
  validationError: string;
  editArtValue?: string;
};

const Category = ({ validationError, editArtValue }: TCategoryProps) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  console.log(editArtValue, "수정작품");

  useEffect(() => {
    if (editArtValue) {
      setSelectedOption(editArtValue);
    }
  }, []);

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
  };

  return (
    <Container>
      <CategoryContainer
        name="category"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {CATEGORIES.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </CategoryContainer>
      {validationError && <ErrorMessage>{validationError}</ErrorMessage>}
    </Container>
  );
};

export default Category;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
`;

const CategoryContainer = styled.select`
  border: 1px solid #ececec;
  border-radius: 8px;
  height: 50px;
  padding-right: 0.5rem;
  /* margin: 0.2rem 0; */
`;

const ErrorMessage = styled.p`
  padding: 0;
  color: red;
  margin-top: 0.5rem;
`;
