import styled from "@emotion/styled";
import { FcGoogle } from "react-icons/fc";
import { ISignupProps } from "../types";

const SignupView = ({ onAuthOpen }: ISignupProps) => {
  return (
    <Container>
      <Inner>
        <h1>내 손 안의 공공미술, Art-here</h1>
        <p>우연히 만난 길거리 작품들, 아트히어에서 얘기해봐요!</p>
        <button onClick={onAuthOpen}>
          <FcGoogle />
          구글 계정으로 3초 만에 시작하기
        </button>
        <div>
          해당 로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을
          의미하며,
          <br />
          서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.
        </div>
      </Inner>
    </Container>
  );
};

export default SignupView;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 0;
  background-color: #000;
  color: white;
`;

const Inner = styled.div`
  width: 450px;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    font-size: 2.2rem;
    font-weight: 900;
    margin-bottom: 0;
  }

  div {
    text-align: center;
    line-height: 1.5;
    font-size: 0.5rem;
  }

  button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    outline: 0;
    border: 0;
    width: 280px;
    height: 50px;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 20px;

    :hover {
      cursor: pointer;
    }
  }
`;
