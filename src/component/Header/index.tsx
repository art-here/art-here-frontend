import React from "react";
import Navbar from "./Navbar";
import Userbar from "./Userbar";
import { SBarLayout, SHeaderLayout, SLogo, SLogoLink } from "./header.style";

export default function Header() {
  return (
    <SHeaderLayout>
      <SLogoLink to="/">
        <SLogo>Art here</SLogo>
      </SLogoLink>
      <SBarLayout>
        <Navbar />
        <Userbar />
      </SBarLayout>
    </SHeaderLayout>
  );
}
