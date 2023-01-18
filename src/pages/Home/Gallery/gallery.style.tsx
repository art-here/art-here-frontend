import styled from "styled-components";

export const SGalleryLayout = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 8rem;
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  box-sizing: border-box;

  @media screen and (max-width: 480px) {
    top: 12rem;
    min-width: 320px;
    width: 480px;
    display: flex;
    flex-wrap: wrap;
  }
`;
