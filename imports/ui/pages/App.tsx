import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../styles/Post.css";
import "../styles/Access.css";
import "../styles/ProfileThumbnail.css";
import { Router } from "../Router";

export const App = () => (
  <BrowserRouter>
    <div>
      <Router />
    </div>
  </BrowserRouter>
);
