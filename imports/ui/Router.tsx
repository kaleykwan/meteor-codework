import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { RoutePaths } from "./RoutePaths";

export const Router = () => {
  return (
    <Routes>
      <Route path={RoutePaths.HOME} element={<Home />} />
      <Route path={RoutePaths.SIGNUP} element={<SignUp />} />
      <Route path={RoutePaths.SIGNIN} element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
