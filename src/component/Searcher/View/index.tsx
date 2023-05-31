import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { ISearcherProps } from "../types";
import { OPTIONS_SEARCH } from "../../../constants";
import { theme } from "../../../styles/theme";

const SearcherView = ({ onSearch, searchInputRef }: ISearcherProps) => {
  return (
    <Form onSubmit={onSearch}>
      <Inner>
        <Label>
          <FiSearch />
        </Label>
        <Input
          name="search-query"
          placeholder="OO구 혹은 작품 이름을 입력하세요"
          autoComplete="false"
          ref={searchInputRef}
        />
      </Inner>
      <Inner>
        <Select name="select-filter">
          {OPTIONS_SEARCH.map((option, idx) => {
            return (
              <option key={idx} value={option.option}>
                {option.optionName}
              </option>
            );
          })}
        </Select>
        <Button type="submit">찾기</Button>
      </Inner>
    </Form>
  );
};

export default SearcherView;

const Form = styled.form`
  display: flex;
  align-items: center;
  position: absolute;
  top: -7rem;
  left: 2.5rem;

  ${({ theme }) => theme.media.tablet} {
    left: 2rem;
    top: -7rem;
  }

  ${({ theme }) => theme.media.mobile} {
    width: 90%;
    padding-left: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    gap: 1.5rem;
    top: -9rem;
    left: 1.5rem;
  }
`;

const Inner = styled.div`
  width: 90%;
`;

const Label = styled.label`
  font-size: 28px;
  margin-right: 0.5rem;
  color: #797979;

  ${theme.media.mobile} {
    font-size: 24px;
  }
`;

const Input = styled.input`
  margin-right: 1rem;
  width: 14rem;
  height: 2rem;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #aeadad;

  ${({ theme }) => theme.media.tablet} {
    font-size: 12px;
  }

  ${({ theme }) => theme.media.mobile} {
    width: 80%;
    left: 0;
    top: 0;
  }
`;

const Button = styled.button`
  margin-left: 0.5rem;
  width: 4rem;
  height: 2.3rem;
  background-color: #f3f3f4;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  border: none;
`;

const Select = styled.select`
  padding: 10px 12px;
  font-size: 14px;
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid #a7a7a7;

  ${({ theme }) => theme.media.mobile} {
    padding: 8px 10px;
    font-size: 12px;
  }

  ${theme.media.tablet} {
    left: 2rem;
    top: 4rem;
  }
`;
