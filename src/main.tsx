import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
import Search from "./pages/Search";

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
          {
            path: "search",
            element: <Search />,
            children: [
              {
                path: ":filter=:query",
                element: <Gallery />
              }
            ]
          },
          { path: "/home/map", element: <Map /> },
          {
            path: "search",
            element: <Search />,
            children: [
              {
                path: ":filter=:query",
                element: <Map />
              }
            ]
          }
        ]
      }
    ]
  }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
