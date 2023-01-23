import styled from "styled-components";

export const SInfoLayout = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 420px;
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid black;
  box-sizing: border-box;
  color: white;
  background-color: ${(props) => props.theme.color.darkGray};

  @media screen and (max-width: 480px) {
    width: 95%;
    margin: 1rem auto;
    height: fit-content;
  }

  h2 {
    font-weight: 700;
    margin-left: 0.5rem;
    margin-bottom: 0.1rem;
    text-align: left;
  }

  h3 {
    font-weight: 400;
    font-size: 16px;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: left;
    border-bottom: 1px solid white;
  }

  p {
    padding: 0.3rem;
    text-align: left;
  }
`;
