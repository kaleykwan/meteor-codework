import { Meteor } from "meteor/meteor";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../RoutePaths";

export const LogOut = () => {
  const navigate = useNavigate();
  const logOut = () => {
    Meteor.logout();
    navigate(RoutePaths.SIGNIN);
  };
  return <button onClick={logOut}>Log out</button>;
};
