import styled from "@emotion/styled";
import ReviewItemView, { ReviewProps } from "../ReviewView";

const MyReviewsView = () => {
  const mock: ReviewProps = {
    id: 1,
    imageURL: "",
    artName: "작품의 이름",
    title: "리뷰 제목",
    body: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    createdAt: 20211021
  };

  return (
    <Container>
      <Heading>My Reviews</Heading>
      <ReviewContainer>
        <ReviewItemView {...mock} />
        <ReviewItemView {...mock} />
        <ReviewItemView {...mock} />
        <ReviewItemView {...mock} />
      </ReviewContainer>
    </Container>
  );
};

export default MyReviewsView;

const Container = styled.div`
  padding: 2rem;
  min-height: 100vh;
`;

const Heading = styled.h2`
  margin: 3rem;
  font-size: 3rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.ShadowsIntoLight};
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 10rem;
`;
