import styled from "styled-components";

export const SViewLayout = styled.div`
  width: 95%;
  height: 412px;
  margin: 0.5rem auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  @media screen and (max-width: 480px) {
    width: 95%;
    height: 320px;
  }

  img {
    @media screen and (max-width: 480px) {
      width: 100%;
      height: 320px;
    }
  }
`;
