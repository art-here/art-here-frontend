import styled from "@emotion/styled";
import React from "react";
import PageTitle from "../../PageTitle";
import { RxDividerVertical } from "react-icons/rx";
import { theme } from "../../../../styles/theme";

const CreateArtView = () => {
  return (
    <>
      <PageTitle />
      <Container>
        <CreateArtContainer>
          <ImageContainer>
            <ImageWrapper>
              <img src="/assets/mock/art-here.jpg" alt="" />
            </ImageWrapper>
            <label htmlFor="file">
              <div className="btn-upload">파일 업로드하기</div>
            </label>
            <input type="file" name="file" id="file" />
          </ImageContainer>
          {/* TODO: 중복되는 컴포넌트 공통으로 빼기 */}
          <CreateArtForm>
            <div className="two_columns">
              <div>
                <label>작품명</label>
                <input type="text" />
              </div>
              {/* FIXME: 다른데서도 사용될 듯 */}
              <Category>
                <option value="카테고리">카테고리</option>
                <option value="사진">사진</option>
                <option value="벽화">벽화</option>
                <option value="공예">공예</option>
                <option value="조각">조각</option>
                <option value="회화">회화</option>
                <option value="서예">서예</option>
                <option value="미디어">미디어</option>
                <option value="기타">기타</option>
              </Category>
            </div>
            <div className="two_columns">
              <div>
                <label>위도</label>
                <input type="text" />
              </div>
              <div>
                <label>경도</label>
                <input type="text" />
              </div>
            </div>
            <div className="two_columns">
              <div>
                <label>작가명</label>
                <input type="text" />
              </div>
              <div>
                <label>담당 기관</label>
                <input type="text" />
              </div>
            </div>
            <div className="art_info">
              <Address>
                <option value="도로명 주소">도로명 주소</option>
                <option value="옛 주소">옛 주소</option>
              </Address>
              <input type="text" />
            </div>
            <div className="two_columns">
              <div>
                <label>작품 시작일</label>
                <input type="date" />
              </div>
              <div>
                <label>작품 종료일</label>
                <input type="date" />
              </div>
            </div>
            <div className="art_info">
              <label>작품 소개 글</label>
              <textarea maxLength={255} rows={5} wrap="on" />
            </div>
          </CreateArtForm>
        </CreateArtContainer>
      </Container>
      <ButtonWrapper>
        <button>작품 등록하기</button>
      </ButtonWrapper>
    </>
  );
};

export default CreateArtView;

const Container = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 14px;
  padding: 1rem 1.5rem;
`;

const CreateArtContainer = styled.div`
  display: flex;
  gap: 10px;

  ${theme.media.mobile} {
    flex-direction: column;
  }

  ${theme.media.laptop} {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  margin: 0 auto;
  width: 300px;
  height: 300px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .btn-upload {
    width: 300px;
    margin: 1rem 0;
    font-size: 1.1rem;
    padding: 1rem;
    background: #fff;
    border: 1px solid rgb(77, 77, 77);
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: rgb(77, 77, 77);
      color: #fff;
    }
  }

  #file {
    display: none;
  }
`;

const CreateArtForm = styled.form`
  flex-basis: 50%;
  label {
    margin: 0.2rem 0;
  }
  input {
    margin-bottom: 0.5rem;
    padding: 0.5rem 0.8rem;
    background-color: #ececec;
    border-radius: 8px;
  }
  textarea {
    padding: 1rem;
    background-color: #ececec;
    border-radius: 8px;
    white-space: pre-wrap;
  }

  div.art_info {
    display: flex;
    flex-direction: column;
  }
  .two_columns {
    gap: 10px;
    div {
      display: flex;
      flex-basis: 50%;
      flex-direction: column;
    }

    ${theme.media.desktop} {
      display: flex;
    }
  }

  ${theme.media.mobile} {
    margin-top: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;

  button {
    cursor: pointer;
    font-size: 1.2rem;
    margin-top: 1rem;
    padding: 1rem 2rem;
    border-radius: 8px;
    background-color: black;
    color: white;

    &:hover {
      background-color: darkgray;

      color: black;
    }
  }
`;

const Address = styled.select`
  width: fit-content;
  border: 1px solid #ececec;
  border-radius: 8px;
  padding: 0.5rem 0;
  padding-right: 0.5rem;
  margin: 0.2rem 0;
`;

const Category = styled.select`
  width: 50%;
  border: 1px solid #ececec;
  border-radius: 8px;

  padding-right: 0.5rem;
  margin: 0.2rem 0;
`;
