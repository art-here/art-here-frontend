import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

export const globalStyles = css`
  ${emotionReset}
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

  h2 {
    font-size: 2rem;
    color: #333;
  }
  button {
    font-family: "Pretendard-Regular";
    outline: none;
    border: none;
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
`;
