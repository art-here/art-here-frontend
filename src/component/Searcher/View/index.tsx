import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { ISearcherProps } from "../types";

const SearcherView = ({
  onSelect,
  selectValue,
  PROPERTIES_SEARCH
}: ISearcherProps) => {
  return (
    <Form>
      <Label>
        <FiSearch />
      </Label>
      <Input placeholder="지역 이름을 입력하세요. OO구" />
      <Select onChange={onSelect} defaultValue={selectValue}>
        {PROPERTIES_SEARCH.map((option, idx) => {
          const { property, propertyTitle } = option;
          return (
            <option key={idx} value={property}>
              {propertyTitle}
            </option>
          );
        })}
      </Select>
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
`;

const Button = styled.button``;
const Select = styled.select`
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
`;
