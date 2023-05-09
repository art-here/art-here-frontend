import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
import ShadowsIntoLight from "/assets/fonts/ShadowsIntoLight.ttf";
export const globalStyles = css`
  ${emotionReset}

  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

  @font-face {
    font-family: "ShadowsIntoLight";
    src: url(${ShadowsIntoLight}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0px;
    box-sizing: border-box;
    word-break: keep-all;
    white-space: nowrap;
  }

  body {
    font-family: "Pretendard-Regular";
  }

  div {
    font-family: "Pretendard-Regular";
  }

  h2 {
    font-size: 2rem;
    color: #333;
  }
  button {
    font-family: "Pretendard-Regular";
    outline: none;
    border: none;
    cursor: pointer;
  }

  input {
    font-family: "Pretendard-Regular";
    outline: none;
    border: none;
  }

  select {
    font-size: 1rem;
    font-family: "Pretendard-Regular";
    outline: none;
  }

  textarea {
    border: none;
    outline: none;
    font-family: "Pretendard-Regular";
    resize: none;
  }
  table {
    font-family: "Pretendard-Regular";
  }

  label {
    font-family: "Pretendard-Regular";
  }
`;
