import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery/index";
import Map from "./pages/Map";
import NotFound from "./pages/NotFound";
import WelcomeView from "./component/Common/WelcomeView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound text="잘못된 페이지입니다." />,
    children: [
      { path: "/", element: <WelcomeView /> },
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
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
