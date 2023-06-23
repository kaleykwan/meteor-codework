import React from "react";
import { Feed } from "../components/Feed";
import { ProfileThumbnail } from "../components/ProfileThumbnail";

export const Home = () => {
  return (
    <div className="homepage">
      {/* <ProfileThumbnail /> */}
      <Feed />
    </div>
  )
};
