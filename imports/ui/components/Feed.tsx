import { Meteor } from "meteor/meteor";
import React from "react";
import { PostsCollection } from "../../api/PostsCollection";
import { Post } from "./Post";
import { MakePost } from "./MakePost";
import { useSubscribe } from "meteor/react-meteor-data";

export const Feed = () => {
  const isLoadingPosts = useSubscribe('posts');

  const samplePosts = [
    { name: "Kaley", username: "kaley", text: "test post 1", imageURL: "bla" },
    { name: "Emma", username: "emma", text: "test post 2", imageURL: "bla" },
    { name: "Cuby", username: "cuby", text: "test post 3", imageURL: "bla" },
  ];

  return (
    <div>
      <MakePost />
      {samplePosts.map((post) => {
        return (
          <div>
            <Post {...post} />
          </div>
        );
      })}
    </div>
  );
};
