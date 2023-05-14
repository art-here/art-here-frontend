import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router";

import Sidebar from "../Sidebar";
const AdminView = () => {
  return (
    <Container>
      <Sidebar />
      <ContentsContainer>
        <ContentsTitle>
          <h2>관리자 페이지</h2>
        </ContentsTitle>
        <Outlet />
      </ContentsContainer>
    </Container>
  );
};

export default AdminView;

const Container = styled.div`
  display: flex;
`;

const ContentsContainer = styled.div`
  margin: 0 auto;
  width: 100%;

  padding: 0 1.25rem;
  h2 {
    font-size: 1.5rem;
    color: gray;
  }
`;

const ContentsTitle = styled.div`
  padding-top: 40px;
`;
