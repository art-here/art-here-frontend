import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { ISearcherProps } from "../types";

const SearcherView = ({ onSearch, PROPERTIES_SEARCH }: ISearcherProps) => {
  return (
    <Form onSubmit={onSearch}>
      <Label>
        <FiSearch />
      </Label>
      <Input
        name="search-query"
        placeholder="OO구 혹은 작품 이름을 입력하세요"
      />
      <Select name="select-filter">
        {PROPERTIES_SEARCH.map((option, idx) => {
          return (
            <option key={idx} value={option.property}>
              {option.propertyTitle}
            </option>
          );
        })}
      </Select>
      <button type="submit">찾기</button>
    </Form>
  );
};

export default SearcherView;

const Form = styled.form`
  display: flex;
  align-items: center;
  position: absolute;
  top: 10rem;
  left: 2rem;

  @media screen and (max-width: 480px) {
    top: 14rem;
    left: 2.5rem;
  }
`;

const Label = styled.label`
  font-size: 30px;
  margin-right: 0.5rem;
`;

const Input = styled.input`
  margin-right: 2rem;
  width: 16rem;
  height: 2rem;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid black;

  @media screen and (max-width: 650px) {
    position: absolute;
    width: 12rem;
  }
`;

const Button = styled.button``;

const Select = styled.select`
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;

  @media screen and (max-width: 650px) {
    position: absolute;
    top: 0;
    left: 230px;
  }
`;
