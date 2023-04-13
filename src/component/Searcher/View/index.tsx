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
      <Button type="submit">찾기</Button>
    </Form>
  );
};

export default SearcherView;

const Form = styled.form`
  display: flex;
  align-items: center;
  position: absolute;
  top: 7rem;
  right: 2rem;

  @media screen and (max-width: 480px) {
    top: 14rem;
    left: 2.5rem;
  }
`;

const Label = styled.label`
  font-size: 28px;
  margin-right: 0.5rem;
  color: #797979;
`;

const Input = styled.input`
  margin-right: 1rem;
  width: 14rem;
  height: 2rem;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #aeadad;

  @media screen and (max-width: 650px) {
    position: absolute;
    width: 12rem;
  }
`;

const Button = styled.button`
  margin-left: 0.5rem;
  width: 4rem;
  height: 2.3rem;
  background-color: #f3f3f4;
  border-radius: 12px;
  font-weight: 700;
  border: none;
`;

const Select = styled.select`
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid #a7a7a7;

  @media screen and (max-width: 650px) {
    position: absolute;
    top: 0;
    left: 230px;
  }
`;
