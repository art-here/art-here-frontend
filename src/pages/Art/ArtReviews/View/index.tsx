import styled from "@emotion/styled";
import React from "react";
import ThumbnailView from "../../../Arts/Gallery/View/ThumbnailView";
import { TfiPencil } from "react-icons/tfi";
import { AiFillLike } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";

const ArtReviewsView = () => {
  return (
    <Container>
      <SorterBox>
        <Sorter>
          <AiFillLike /> 인기순
        </Sorter>
        <Sorter>
          <MdDashboard />
          최신순
        </Sorter>
      </SorterBox>
      <ButtonBox>
        <ReviewModalBtn>
          <TfiPencil />
        </ReviewModalBtn>
      </ButtonBox>
      <Reviews>
        <ThumbnailView imageURL="" artName="user" />
        <ThumbnailView imageURL="" artName="user" />
        <ThumbnailView imageURL="" artName="user" />
      </Reviews>
    </Container>
  );
};

export default ArtReviewsView;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 3rem;
`;

const SorterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 1rem;
  width: 100%;
  height: 50px;
`;
const Sorter = styled.button`
  display: flex;
  width: 5rem;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.9rem;
  color: gray;
  font-weight: bold;
  background-color: white;
`;
const Reviews = styled.div`
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
`;

const ReviewModalBtn = styled.button`
  display: block;
  width: 40px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 1.5rem;
  line-height: 1.8;
  border-radius: 50%;
`;

const ButtonBox = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80px;
`;
