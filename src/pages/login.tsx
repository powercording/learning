import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/user";
import IpageProps from "../interfaces/page";
import firebase from "firebase";
import { SignInWithSocialMedia as SocialMediapopup } from "../modules/auth";
import logging from "../config/logging";

const LoginPage: React.FunctionComponent<IpageProps> = (props) => {
  const [authenticating, setAuthenticating] = useState(false);
  const [error, setError] = useState("");

  const userContext = useContext(UserContext);
  const history = useNavigate();
  const isLogin = window.location.pathname.includes("login");

  const SignInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
    if (error !== "") setError("");

    setAuthenticating(true);

    SocialMediapopup(provider).then(async (result) => {
      logging.info(result);
      let user = result.user;

      if (user) {
        let uid = user.uid;
        let name = user.displayName;

        if (name) {
          try {
            let fire_token = await user.getIdToken();
            /*if we get a token , auth with the backend */
          } catch (error) {
            setError("Invaild token.");
            logging.error(error);
            setAuthenticating(false);
          }
        } else {
          /** if no name is returned we could have a custom form
           * here getting the user's name depending on the provider
           * just use that for now.
           */
          setError("The identity provider doesnt have a user name");
          setAuthenticating(false);
        }
      } else {
        setError(
          "The identity provider is missing a lot of the  necessary information. "
        );
      }
    });
  };

  return <p>LoginPage</p>;
};

export default LoginPage;
