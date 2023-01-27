import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { WELCOME_RENDER_TIME } from "./constants";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
