import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import { SLayout } from "./component/Layout";

export default function App() {
  return (
    <SLayout>
      <Header />
      <Outlet />
    </SLayout>
  );
}
