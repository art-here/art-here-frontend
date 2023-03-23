import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../Sidebar";
const AdminView = () => {
  return (
    <Container>
      <Sidebar />
      <Contents>
        <h2>관리자 페이지</h2>
        <Outlet />
      </Contents>
    </Container>
  );
};

export default AdminView;

const Container = styled.div`
  display: flex;
`;

const Contents = styled.div`
  padding: 1.25rem;
`;
