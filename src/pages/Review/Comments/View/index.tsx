import styled from "@emotion/styled";
import React from "react";
import Comment from "../Comment";

const CommentsView = () => {
  return (
    <Container>
      <Divider />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default CommentsView;

const Container = styled.div``;

const Divider = styled.div`
  border: solid 1px #ececec;
`;
