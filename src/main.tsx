import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Global, css } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Gallery from "./pages/Home/Gallery/index";
import Map from "./pages/Home/Map";
import NotFound from "./pages/NotFound";
import Welcome from "./component/Welcome";
import { OAuth } from "./pages/OAuth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ADMIN_ROUTE } from "./constants/router";
import Admin from "./pages/Admin";
import Art from "./pages/Admin/Art";
import CreateArt from "./pages/Admin/Art/CreateArt";
import { theme } from "./styles/theme";
import { globalStyles } from "./styles/glabalstyle";

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
            element: <Gallery />
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
  }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
