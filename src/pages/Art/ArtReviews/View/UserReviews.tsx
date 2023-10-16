import styled from "@emotion/styled";
import ThumbnailView from "../../../Arts/Gallery/View/ThumbnailView";
import { ArtUserReviewsResponse } from "../../../../services/art/userReviews";

const UserReviews = ({ postInfo }: ArtUserReviewsResponse) => {
  return (
    <Container>
      {postInfo.map((post) => {
        const { id, imageURL, title, name, like } = post;
        return (
          <ThumbnailView
            key={id}
            imageURL={`${imageURL}`}
            artName={`${title}`}
            userName={`${name}`}
            likeCount={like}
          />
        );
      })}
    </Container>
  );
};

export default UserReviews;

const Container = styled.div`
  width: 90%;
  min-height: 300px;
  height: fit-content;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  grid-auto-rows: 300px;
  grid-auto-columns: 1fr;
  box-sizing: border-box;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 1rem;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 1rem;
  }
`;
