import styled from "@emotion/styled";
import React from "react";
import { IThumbNailProps } from "../types";

const ThumbnailView = React.forwardRef<HTMLImageElement, IThumbNailProps>(
  ({ imageURL, artName }, intObserver) => {
    const content = intObserver ? (
      <Image src={imageURL} alt={artName} ref={intObserver} />
    ) : (
      <Image src={imageURL} alt={artName} />
    );

    return <Container>{content}</Container>;
  }
);

export default ThumbnailView;

const Container = styled.article`
  padding: 0.5rem;
`;

const Image = styled.img`
  display: block;
  width: 95%;
  margin: 0.5rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: all ease-in-out 0.3s;

  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
