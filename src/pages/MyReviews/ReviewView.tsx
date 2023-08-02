import styled from "@emotion/styled";

export interface ReviewProps {
  imageURL: string;
  artName: string;
  title: string;
  id: number;
  body: string;
  createdAt: number;
}

const ReviewItemView = ({ imageURL, artName, title, body }: ReviewProps) => {
  return (
    <Container>
      <Image src={imageURL} alt={artName} />
      <InfoBox>
        <Title>{title}</Title>
        <CreatedDate> 2021-03-23 작성</CreatedDate>
        <BodyText>{body}</BodyText>
        <RemoveBtn>삭제</RemoveBtn>
      </InfoBox>
    </Container>
  );
};

export default ReviewItemView;

const CreatedDate = styled.span`
  padding-left: 0.5rem;
  font-size: 0.8rem;
  color: gray;
`;

const BodyText = styled.p`
  width: 90%;
  padding: 1rem 0.5rem;
  height: 3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const RemoveBtn = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  padding: 4px 8px;
  background-color: #fff;
  border-radius: 10px;
  font-size: 1.2rem;
  background-color: #ff7a7a;
  color: white;
`;

const InfoBox = styled.div`
  position: relative;
  width: 80%;
  border-left: 1px solid gray;
  padding: 1.5rem;
`;

const Title = styled.span`
  width: fit-content;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Container = styled.article`
  position: relative;
  width: 90%;
  height: 8rem;
  display: flex;
  justify-content: center;
  margin: 10px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;

  ${({ theme }) => theme.media.tablet} {
    height: fit-content;
  }
  ${({ theme }) => theme.media.mobile} {
    width: 80%;
    height: fit-content;
    margin-top: 0rem;
  }

  :hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  display: block;
  width: 20%;
  margin: 0.5rem;
  border-radius: 10px;

  ${({ theme }) => theme.media.tablet} {
    height: 250px;
  }

  ${({ theme }) => theme.media.mobile} {
    height: 250px;
    margin-left: 0rem;
  }
`;
