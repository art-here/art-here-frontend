import styled from "@emotion/styled";
import Thumbnail from "../Thumbnail";

const GalleryView = () => {
  return (
    <Container>
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
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
