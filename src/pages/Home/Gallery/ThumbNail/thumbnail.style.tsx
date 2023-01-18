import styled from "styled-components";

export const SThumbNailLayout = styled.article`
  padding: 0.5rem;
`;

export const SThumbNail = styled.img`
  display: block;
  width: 95%;
  margin: 0.5rem;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
