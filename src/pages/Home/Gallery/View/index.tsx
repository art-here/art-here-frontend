import React from "react";
import styled from "@emotion/styled";
import { TGalleryProps } from "../types";
import ThumbnailView from "./ThumbnailView";

const GalleryView = React.forwardRef<HTMLImageElement, TGalleryProps>(
  ({ thumbnails, isLoading }, intObserver) => {
    return (
      <Container>
        {isLoading ? "Search Now . . ." : ""}
        {thumbnails &&
          thumbnails.map((item, idx) => {
            const { id, artName, imageURL } = item;
            if (idx === thumbnails.length - 1) {
              return (
                <ThumbnailView
                  key={id}
                  artName={artName}
                  imageURL={imageURL}
                  ref={intObserver}
                />
              );
            } else {
              return (
                <ThumbnailView key={id} artName={artName} imageURL={imageURL} />
              );
            }
          })}
        {!isLoading && (!thumbnails || thumbnails.length === 0) && (
          <div>검색 결과가 없습니다.</div>
        )}
        {/* TODO: top버튼 만들기 */}
      </Container>
    );
  }
);

export default GalleryView;

const Container = styled.section`
  position: absolute;
  width: 100%;
  height: fit-content;
  top: 11rem;
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  box-sizing: border-box;

  @media (max-width: 480px) {
    top: 10rem;
    min-width: 320px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 1024px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;
