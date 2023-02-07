import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WELCOME_RENDER_TIME } from "../../constants";
import WelcomeView from "./View";

const Welcome = () => {
  const navigator = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigator("home", { replace: true });
    }, WELCOME_RENDER_TIME);
  }, []);
  return <WelcomeView />;
};

export default Welcome;
