import { Meteor } from "meteor/meteor";
import React, { useEffect, useState } from "react";
import { PostsCollection } from "../../api/PostsCollection";
import { Post } from "./Post";
import { MakePost } from "./MakePost";
import { useSubscribe, useFind } from "meteor/react-meteor-data";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../RoutePaths";
import { LogOut } from "./LogOut";

export const Feed = () => {
  const navigate = useNavigate();
  const isLoadingPosts = useSubscribe("allPosts");
  const posts = useFind(() =>
    PostsCollection.find({}, { sort: { createdAt: -1 } })
  );

  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    if (Meteor.user() != null) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [Meteor.user()]);

  console.log("----rerendering Feed----");

  return (
    <div className="feed">
      <div className="feed-make-post">
        <MakePost />
      </div>
      <div className="feed-posts">
        {posts.map((post) => {
          return (
            <div>
              <Post
                key={post._id}
                id={post._id}
                name={post.name}
                username={post.username}
                text={post.text}
                imageURL={post.imageURL}
              />
            </div>
          );
        })}
      </div>
      <div>
        {loggedIn ? (
          <LogOut />
        ) : (
          <button onClick={() => navigate(RoutePaths.SIGNUP)}>Sign Up</button>
        )}
      </div>
    </div>
  );
};
