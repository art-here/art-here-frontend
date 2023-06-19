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
        <div>
          <Title>ArtName</Title>
          <Agency>{artAccountInfo?.agency}</Agency>
          <Star>
            <AiFillStar color="red" /> {starRating}
          </Star>
        </div>
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
`;

const Thumbnail = styled.img`
  display: block;
  width: 250px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid black;
  outline: 1px solid black;
  outline-offset: 5px;
`;

const Information = styled.div`
  position: relative;
  width: 100%;
  margin-left: 1rem;
  padding: 1rem;
  box-sizing: border-box;

  div {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
  }
`;

const Title = styled.h2`
  display: inline;
  margin: 0 1rem;
  font-weight: bold;
`;

const Agency = styled.span`
  height: 2rem;
  padding: 0.5rem 0.8rem;
  border-radius: 10px;
  color: white;
  background-color: black;
`;

const Star = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin-left: 0.5rem;
  width: 4rem;
  height: 2rem;
`;

const Description = styled.p`
  width: 100%;
  padding: 1rem 1rem 0 1rem;
  line-height: 1.5;
  white-space: normal;
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
  }
`;

const PostCounts = styled(Address)`
  color: gray;
  strong {
    border-right: 2px solid gray;
  }
`;

const InfoBottom = styled.div``;
