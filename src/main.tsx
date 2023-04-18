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
import Home from "./pages/Home";
import Map from "./pages/Home/Map";
import NotFound from "./pages/NotFound";
import Welcome from "./component/Welcome";
import { OAuth } from "./pages/OAuth";
import Admin from "./pages/Admin";
import Art from "./pages/Admin/MyArt";
import CreateArt from "./pages/Admin/CreateArt";

import { ADMIN_ROUTE, SIGNUP_ROUTE } from "./constants/router";
import GalleryHOC from "./pages/Home/Gallery/GalleryHOC";
import SearchGallery from "./pages/Search";
import { RecoilRoot } from "recoil";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound text="잘못된 페이지입니다." />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/oauth/*", element: <OAuth /> },
      {
        path: "/home",
        element: <Home />,
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
          { path: "/home/map", element: <Map /> }
        ]
      },
      {
        path: ADMIN_ROUTE.MY_ART,
        element: <Admin />,
        children: [
          {
            index: true,
            element: <Art />
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false
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
