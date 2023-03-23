import React, { ReactNode } from "react";
import { ILayoutProps } from "./types";
import LayoutView from "./View/LayoutView";

const Layout = ({ children }: ILayoutProps) => {
  return <LayoutView children={children} />;
};

export default Layout;
