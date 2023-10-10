import styled from "@emotion/styled";
import { AiFillStar } from "react-icons/ai";
import { IArtAccountProps } from "..";

const ArtAccountView = ({
  starRating,
  postCount,
  artAccountInfo
}: IArtAccountProps) => {
  return (
    <Container>
      <Thumbnail src={artAccountInfo?.imageURL} />
      <Information>
        <InfoMain>
          <Title>{artAccountInfo?.artName}</Title>
          <Agency>{artAccountInfo?.agency}</Agency>
          <Star>
            <AiFillStar color="red" /> {starRating}
          </Star>
        </InfoMain>
        <Description>{artAccountInfo?.info}</Description>
        <InfoBottom>
          <Address>
            <strong>위치</strong>
            {artAccountInfo?.roadAddress}
          </Address>
          <PostCounts>
            <strong>관련 게시물 수 </strong>
            {postCount}
          </PostCounts>
        </InfoBottom>
      </Information>
    </Container>
  );
};

export default ArtAccountView;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  padding: 1rem;
  width: 90%;
  min-height: 100px;
  height: fit-content;
  background-color: #fff;
  border-bottom: 1px solid gray;

  ${({ theme }) => theme.media.mobile} {
    margin-top: 30px;
    flex-wrap: wrap;
  }
`;

const Thumbnail = styled.img`
  display: block;
  width: 250px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid black;
  outline: 1px solid black;
  outline-offset: 5px;

  ${({ theme }) => theme.media.mobile} {
    width: 160px;
    height: 160px;
    margin-left: 1rem;
  }
`;

const Information = styled.div`
  position: relative;
  width: 100%;
  margin-left: 1rem;
  padding: 1rem;
  box-sizing: border-box;

  ${({ theme }) => theme.media.mobile} {
    margin: 0;
  }
`;

const InfoMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;

  ${({ theme }) => theme.media.mobile} {
    flex-wrap: wrap;
    margin-top: 1rem;
  }
`;

const Title = styled.h2`
  display: inline;
  margin: 0 1rem;
  font-weight: bold;

  ${({ theme }) => theme.media.mobile} {
    display: block;
    width: 100%;
    font-size: 1.7rem;
    margin: 0;
  }
`;

const Agency = styled.span`
  height: 2rem;
  padding: 0.5rem 0.8rem;
  border-radius: 10px;
  color: white;
  background-color: black;
  ${({ theme }) => theme.media.mobile} {
    position: absolute;
    top: -3rem;
    right: 0rem;
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
    line-height: 1.6;
  }
`;

const Star = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin-left: 0.5rem;
  width: 4rem;
  height: 2rem;

  ${({ theme }) => theme.media.mobile} {
    position: absolute;
    right: 0rem;
    top: -1rem;
  }
`;

const Description = styled.p`
  width: 100%;
  padding: 1rem 1rem 0 1rem;
  line-height: 1.5;
  white-space: normal;
  ${({ theme }) => theme.media.mobile} {
    padding: 0;
  }
`;

const Address = styled.div`
  width: 100%;
  padding-left: 0.5rem;
  font-size: 14px;

  strong {
    font-weight: bold;
    margin-right: 0.8rem;
    border-right: 2px solid black;
    padding-right: 0.5rem;
    padding-left: 0.5rem;

    ${({ theme }) => theme.media.mobile} {
      margin-right: 0.4rem;
      padding-left: 0;
    }
  }

  ${({ theme }) => theme.media.mobile} {
    padding: 0;
  }
`;

const PostCounts = styled(Address)`
  color: gray;
  strong {
    border-right: 2px solid gray;
  }
`;

const InfoBottom = styled.div`
  display: flex;
  margin-top: 1.5rem;
  ${({ theme }) => theme.media.mobile} {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;
