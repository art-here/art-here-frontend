import React from "react";
import styled from "@emotion/styled";
import { TGalleryProps } from "../types";
import ThumbnailView from "./ThumbnailView";
import Searcher from "../../../../component/Searcher";
import Categories from "../../../../component/Categories";
import LoaderView from "../../../../component/Common/Loader/View";

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
            <Notice>
              <strong>검색 결과가 없습니다.</strong>
              <br /> 옵션을 확인하거나 다른 키워드로 검색해주세요!
            </Notice>
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
  width: 100%;
  position: absolute;
  top: 11rem;
`;

const Inner = styled.section`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: 300px;
  grid-auto-columns: 1fr;
  box-sizing: border-box;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 250px;
    grid-gap: 20px;
  }

  ${({ theme }) => theme.media.mobile} {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 0px;
    padding-top: 7rem;
  }
`;

const Notice = styled.div`
  width: 90vw;
  height: fit-content;
  margin-top: 3rem;
  margin: 0 auto;
  padding: 3rem;
  text-align: center;
  line-height: 1.4;
  color: gray;
  font-size: 0.9rem;
`;
