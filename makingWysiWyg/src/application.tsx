import React, { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import LoadingComponent from "./components/LoadingComponent";
import Navigation from "./components/Navigation";
import routes from "./config/routes";
import {
  initialUserState,
  UserContextProvider,
  userReducer,
} from "./contexts/user";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const [loading, setLoading] = useState(true);

  /**Used for Debugging */
  const [authStage, setAuthStage] = useState("Checking localstorage...");

  useEffect(() => {
    setTimeout(() => {
      checkLocalStorageForCredentials();
    }, 1000);
  }, []);
  /**
   * check to see if we have a token
   * If we do, verify it with the backend.
   * If not, we are logged out inintially
   */

  const checkLocalStorageForCredentials = () => {
    setAuthStage("Chcking Credentials....");
    const fire_token = localStorage.getItem("fire_token");

    if (fire_token === null) {
      userDispatch({ type: "logout", payload: initialUserState });
      setAuthStage("No Credentials found..");
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      /**vaildate with the backend*/
      setAuthStage("Credentials found! vaildating...");
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const userContextValues = {
    userState,
    userDispatch,
  };

  if (loading) {
    return <LoadingComponent>{authStage}</LoadingComponent>;
  }

  return (
    <>
      <UserContextProvider value={userContextValues}>
        <Navigation />
        <Routes>
          {routes.map((route, index) => {
            if (route.auth) {
              <Route
                key={index}
                path={route.path}
                element={
                  <AuthRoute>
                    <route.component />
                  </AuthRoute>
                }
              />;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
        </Routes>
      </UserContextProvider>
    </>
  );
};
export default Application;
