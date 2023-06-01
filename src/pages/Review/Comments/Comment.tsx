import styled from "@emotion/styled";
import React, { useState } from "react";
import profileImg from "/assets/images/art_default.jpeg";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { Popover, Button } from "antd";
import Popup from "./Popup";
import { TComment } from "./types";

type TProps = {
  comment: TComment;
};

const Comment = ({ comment }: TProps) => {
  return (
    <Container>
      <CommentInfo>
        <ImageContainer>
          <img src={comment.writer.profile} alt="" />
          <div className="user_name">
            <p>{comment.writer.name}</p>
            {/* FIXME: 여기에 데이터 어떤거 할지 */}
            <span>27분전</span>
          </div>
        </ImageContainer>
        <CustomPopover content={Popup} trigger="click">
          <button>
            <MdOutlineMoreHoriz />
          </button>
        </CustomPopover>
      </CommentInfo>
      <Content>
        <p>{comment.content}</p>
      </Content>
      <Divider />
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  padding: 1rem 2rem;
`;

const Divider = styled.div`
  margin-top: 1rem;
  border: solid 1px #ececec;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;

  column-gap: 1rem;
  p {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .user_name {
    display: flex;
    flex-direction: column;
    p {
      margin: 0;
    }
    span {
      color: gray;
      font-size: 0.8rem;
      margin-top: 0.5rem;
    }
  }
`;

const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 0.5rem;
`;

const Content = styled.div`
  p {
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    white-space: pre-wrap;
    word-wrap: break-word;
    line-height: 1.1rem;
  }
`;

const CustomPopover = styled(Popover)`
  padding: 0;
  margin: 0;
  button {
    margin: 0;
    padding: 0;
  }
`;
