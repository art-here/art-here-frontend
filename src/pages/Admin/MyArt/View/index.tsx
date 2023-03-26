import styled from "@emotion/styled";
import { GrGallery } from "react-icons/gr";
import Divider from "../../../../component/Common/Divider/Divider";
import { theme } from "../../../../styles/theme";
import PageTitle from "../../PageTitle";

const ArtView = () => {
  return (
    <>
      <PageTitle page={"myArt"} />
      <ImageContainer>
        <Gallery theme={theme}>
          <div className="grid-item">
            <img src="/assets/mock/art-here.jpg" alt="" />
          </div>
          <div className="grid-item">
            <img src="/assets/mock/art-here2.jpg" alt="" />
          </div>
          <div className="grid-item">
            <img src="/assets/mock/art-here3.jpg" alt="" />
          </div>
          <div className="grid-item">
            <img src="/assets/mock/art-here3.jpg" alt="" />
          </div>
          <div className="grid-item">
            <img src="/assets/mock/art-here3.jpg" alt="" />
          </div>
          <div className="grid-item">
            <img src="/assets/mock/art-here3.jpg" alt="" />
          </div>
        </Gallery>
      </ImageContainer>
    </>
  );
};

export default ArtView;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Gallery = styled.div`
  display: grid;
  grid-gap: 2px;

  .grid-item {
    position: relative;

    img {
      width: 100%;
      height: 100%;
      display: block;
    }
    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }

  ${theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
    .grid-item {
      height: 600px;
    }
  }

  ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    .grid-item {
      height: 500px;
    }
  }

  ${theme.media.laptop} {
    grid-template-columns: repeat(3, 1fr);
    .grid-item {
      height: 400px;
    }
  }
  ${theme.media.desktop} {
    grid-template-columns: repeat(3, 1fr);
    .grid-item {
      height: 500px;
    }
  }
`;
