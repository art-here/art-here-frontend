import styled from "@emotion/styled";
import Thumbnail from "../Thumbnail";
import { TGalleryProps } from "../types";

const GalleryView = ({ thumbnails, isLoading }: TGalleryProps) => {
  return (
    <Container>
      {isLoading ? "loading" : ""}
      {thumbnails &&
        thumbnails.map((item) => {
          const { id, artName, imageURL } = item;
          return <Thumbnail key={id} artName={artName} imageURL={imageURL} />;
        })}
    </Container>
  );
};

export default GalleryView;

const Container = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 13rem;
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  box-sizing: border-box;

  @media (max-width: 480px) {
    top: 16rem;
    min-width: 320px;
    width: 480px;
    display: flex;
    flex-wrap: wrap;
  }
`;
