import styled from "@emotion/styled";
import React, { useState } from "react";
import profileImg from "/assets/images/art_default.jpeg";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { Popover, Button } from "antd";
import Popup from "./Popup";

const Comment = () => {
  return (
    <Container>
      <CommentInfo>
        <ImageContainer>
          <img src={profileImg} alt="" />
          <div className="user_name">
            <p>art_lover</p>
            <span>27분 전</span>
          </div>
        </ImageContainer>
        <CustomPopover content={Popup} trigger="click">
          <button>
            <MdOutlineMoreHoriz />
          </button>
        </CustomPopover>
      </CommentInfo>
      <Content>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          eveniet veritatis rerum laborum tempora iure illo consequuntur
          recusandae praesentium sequi, commodi qui sit nobis corrupti totam
          quod neque natus ipsam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolores ab labore omnis, enim ratione asperiores
          quidem neque eum blanditiis repellat natus, facere pariatur recusandae
          saepe magni placeat eligendi odit facilis.
        </p>
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
