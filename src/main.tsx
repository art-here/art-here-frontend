import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Global } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { globalStyles } from "./styles/glabalstyle";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./index.css";
import App from "./App";
import SearchGallery from "./pages/Search";
import Map from "./pages/Arts/Map";
// import Art from "./pages/Art/Art[id]"
import NotFound from "./pages/NotFound";
import Welcome from "./component/Welcome";
import { OAuth } from "./pages/OAuth";
import Admin from "./pages/Admin";
import AdminArt from "./pages/Admin/MyArt";
import CreateArt from "./pages/Admin/CreateArt";

import { ADMIN_ROUTE, ART_ROUTE, SIGNUP_ROUTE } from "./constants/router";

import { RecoilRoot } from "recoil";
import Signup from "./pages/Signup";
import Arts from "./pages/Arts";
import Art from "./pages/Art";
import Gallery from "./pages/Arts/Gallery";
import GalleryHOC from "./pages/Arts/Gallery/GalleryHOC";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound text="잘못된 페이지입니다." />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/oauth/*", element: <OAuth /> },
      {
        path: "/arts",
        element: <Arts />,
        children: [
          {
            index: true,
            element: <GalleryHOC />
          },
          {
            path: "search",
            element: <SearchGallery />,
            children: [
              {
                path: ":filter=:query"
              }
            ]
          },
          { path: "map", element: <Map /> }
        ]
      },
      {
        path: ART_ROUTE.ART,
        element: <Art />
      },
      {
        path: ADMIN_ROUTE.MY_ART,
        element: <Admin />,
        children: [
          {
            index: true,
            element: <AdminArt />
          },
          { path: ADMIN_ROUTE.CREATE_ART, element: <CreateArt /> }
        ]
      }
    ]
  },
  {
    path: SIGNUP_ROUTE.SIGNUP,
    element: <Signup />
  }
]);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      // 개발시 적용 옵션
      // staleTime: Infinity,
      cacheTime: Infinity
    }
  }
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <RouterProvider router={router} />
        </ThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
