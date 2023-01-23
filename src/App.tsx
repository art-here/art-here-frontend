import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import { SLayout } from "./component/Layout/Layout.style";

import { useInjectKakaoMapApi } from "react-kakao-maps-sdk";

export default function App() {
  useInjectKakaoMapApi({
    appkey: import.meta.env.VITE_KAKAO_MAP_KEY
  });
  return (
    <SLayout>
      <Header />
      <Outlet />
    </SLayout>
  );
}
