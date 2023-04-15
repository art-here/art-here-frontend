import { BASE_AUTH_URL } from "../../constants";
import SignupView from "./View";
import { ISignupProps } from "./types";

const Signup = () => {
  const onAuthOpen = () => {
    window.open(
      BASE_AUTH_URL,
      "_self",
      "width=400,height=600,left=400,top=400"
    );
  };

  const SignupViewProps: ISignupProps = {
    onAuthOpen
  };
  return <SignupView {...SignupViewProps} />;
};

export default Signup;
