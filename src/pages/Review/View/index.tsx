import styled from "@emotion/styled";
import Image from "/assets/images/background.jpg";
import Comments from "../Comments";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { Pagination } from "antd";
import { IReviewProps } from "../types";

const ReviewView = ({ review, onLike, onDisLike }: IReviewProps) => {
  return (
    <Container>
      <ArtContainer>
        <ImageContainer>
          <p>카테고리</p>
          <ImageWrapper>
            {/* TODO: 이미지 useLocation */}
            <img src={Image} alt="Image" />
          </ImageWrapper>
          <ButtonContainer>
            <button onClick={() => onLike()}>
              <AiOutlineLike />
              <span>{review?.likeCount}</span>
            </button>
            <button onClick={() => onDisLike()}>
              <AiOutlineDislike />
              <span>{review?.dislikeCount}</span>
            </button>
            <button className="location_btn">위치 보기</button>
          </ButtonContainer>
        </ImageContainer>
        <InfoContainer>
          <NameInfo>
            <h2>작품이름이름이름</h2>
            <h3>작가 이름</h3>
          </NameInfo>
          <ContentInfo>
            <p>{review?.content}</p>
          </ContentInfo>
        </InfoContainer>
      </ArtContainer>
      <Comments />
      <CustomPagination defaultCurrent={1} total={50} />
    </Container>
  );
};

export default ReviewView;

const Container = styled.div`
  padding: 4rem 0;
  width: 80%;
  margin: 0 auto;
`;

const ArtContainer = styled.div`
  display: flex;
  column-gap: 8rem;
  margin-bottom: 1rem;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  p {
    margin-bottom: 1rem;
  }

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  text-align: center;
  img {
    width: 100%;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  width: 50%;

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    margin-top: 2rem;
  }
`;
const NameInfo = styled.div`
  h2 {
    font-weight: bold;
    font-size: 30px !important;
    margin-bottom: 1.5rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
  width: 100%;
  border-bottom: 1px solid #ececec;
`;

const ContentInfo = styled.div`
  padding: 1rem 0;
  p {
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    white-space: pre-wrap;
    word-wrap: break-word;
    line-height: 2rem;
  }
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  column-gap: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    flex: 1;
    font-size: 1rem;
    padding: 1rem 2rem;
    border-radius: 8px;
    background-color: white;
    color: black;
    svg {
      font-size: 1rem;
    }
    border: 1px solid #ececec;

    &:hover {
      border: 1px solid black;
    }
  }
  .location_btn {
    background-color: black;
    color: white;
    &:hover {
      border: 1px solid #ececec;
      color: #ffff91;
    }
  }
`;

const CustomPagination = styled(Pagination)`
  margin-top: 1rem;
  text-align: center;
`;
