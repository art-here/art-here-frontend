import styled from "@emotion/styled";
import { IThumbNailProps } from "../types";

const ThumbnailView = ({ imageURL, artName }: IThumbNailProps) => {
  return (
    <Container data-name={artName}>
      <Image src={imageURL} alt={artName} />
    </Container>
  );
};

export default ThumbnailView;

const Container = styled.article`
  display: flex;
  justify-content: center;
  margin: 10px;
  position: relative;

  &:hover:before {
    cursor: pointer;
    z-index: 1000;
    position: absolute;
    bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: end;
    width: 95%;
    height: 24%;
    padding-bottom: 10px;
    content: attr(data-name);
    color: white;
    border-radius: 10px;
    box-sizing: border-box;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8688068977591037) 11%,
      rgba(116, 86, 21, 0) 73%,
      rgba(253, 187, 45, 0) 100%
    );
  }
`;

const Image = styled.img`
  display: block;
  width: 95%;
  margin: 0.5rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  :hover {
    cursor: pointer;
  }
`;