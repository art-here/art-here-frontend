import React from "react";
import styled from "@emotion/styled";
import { TGalleryProps } from "../types";
import ThumbnailView from "./ThumbnailView";
import Searcher from "../../../../component/Searcher";
import Categories from "../../../../component/Categories";
import LoaderView from "../../../../component/Common/Loader/View";
import { theme } from "../../../../styles/theme";
const GalleryView = React.forwardRef<HTMLImageElement, TGalleryProps>(
  ({ thumbnails, isLoading, hasNext, setNextQuery }, intObserver) => {
    return (
      <Container>
        <Inner>
          <Searcher />
          <Categories setNextQuery={setNextQuery} />
          {thumbnails &&
            thumbnails.map((item) => {
              return (
                <ThumbnailView
                  key={item.id}
                  artName={item.artName}
                  imageURL={item.imageURL}
                />
              );
            })}

          {!isLoading && (!thumbnails || thumbnails.length === 0) && (
            <div>검색 결과가 없습니다.</div>
          )}
          {/* TODO: top버튼 만들기 */}
        </Inner>
        {!isLoading && hasNext && <LoaderView ref={intObserver} />}
      </Container>
    );
  }
);

export default GalleryView;

const Container = styled.div`
  position: absolute;
  top: 11rem;
`;

const Inner = styled.section`
  width: 100%;
  height: fit-content;

  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 300px;
  grid-auto-columns: 1fr;
  box-sizing: border-box;

  ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);

    grid-auto-rows: 400px;
    background-color: red;
  }

  ${theme.media.mobile} {
    top: 10rem;
    min-width: 320px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: blue;
  }
`;
