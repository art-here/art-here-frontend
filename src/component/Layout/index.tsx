import styled from "styled-components";

export const SLayout = styled.div`
  width: 1280px;
  max-width: 1400px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 480px) {
    min-width: 320px;
    width: 480px;
    display: flex;
    flex-wrap: wrap;
  }
`;
