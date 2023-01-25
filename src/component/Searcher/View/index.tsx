import styled from '@emotion/styled';
import { FiSearch } from 'react-icons/fi';

const SearcherView = () => {
  return (
    <Form>
      <Label>
        <FiSearch />
      </Label>
      <Input placeholder='지역 이름을 입력하세요. OO구' />
    </Form>
  );
};

export default SearcherView;

export const Form = styled.form`
  display: flex;
  align-items: center;
  position: absolute;
  top: 10rem;
  left: 2rem;

  @media screen and (max-width: 480px) {
    top: 9rem;
    left: 2.5rem;
  }
`;

export const Label = styled.label`
  font-size: 30px;
  margin-right: 0.5rem;
`;

export const Input = styled.input`
  margin-right: 2rem;
  width: 15rem;
  height: 2rem;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid black;
`;

export const Button = styled.button``;
