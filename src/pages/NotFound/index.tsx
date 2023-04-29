import { useNavigate } from "react-router-dom";
import { INotFoundProps } from "./types";
import NotFoundView from "./View";

const NotFound = ({ text }: INotFoundProps) => {
  const navigator = useNavigate();

  const NotFoundProps: INotFoundProps = {
    text,
    onGoHome: () => {
      navigator("/arts");
    }
  };

  return <NotFoundView {...NotFoundProps} />;
};

export default NotFound;
