import { useContext } from "react";
import { Navigate } from "react-router-dom";
import logging from "../../config/logging";
import UserContext from "../../contexts/user";

export interface IAuthRouteProps {
  children: any;
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
  const { children } = props;

  const { user } = useContext(UserContext).userState;

  if (user._id === "") {
    logging.info("Unauthorized, redirecting...");
    return <Navigate to="/login" />;
  } else {
    return <>{children}</>;
  }
};

export default AuthRoute;
