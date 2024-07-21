import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import path from "../utils/path";
import { Home, HomePage } from "../pages/home";
import { Login } from "../pages/auth";
import PageLayOut from "./pageLayout/PageLayOut";
import { UserPage } from "../pages/users";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

const Main = () => {
  const { pathname } = useLocation();
  const [authUser] = useAuthState(auth);

  return (
    <PageLayOut pathname={pathname}>
      <Routes>
        <Route
          path={path.PUBLIC}
          element={authUser ? <Home /> : <Navigate to={path.LOGIN} />}
        >
          <Route path={path.ALL} element={<HomePage />} />
          <Route path={path.HOME} element={<HomePage />} />
        </Route>
        {/* AUTH */}
        <Route
          path={path.LOGIN}
          element={!authUser ? <Login /> : <Navigate to={path.PUBLIC} />}
        />
        {/* USER */}
        <Route
          path={path.USER}
          element={authUser ? <UserPage /> : <Navigate to={path.LOGIN} />}
        />
      </Routes>
    </PageLayOut>
  );
};

export default Main;
