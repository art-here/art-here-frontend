import styled from "styled-components";

export const SMapLayout = styled.section`
  position: absolute;
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  height: 100%;
  top: 8rem;
  padding: 1rem;
  box-sizing: border-box;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
