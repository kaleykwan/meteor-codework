import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { PostsCollection } from "./PostsCollection";

Meteor.methods({
    "posts.insert"({ name, username, text, imageUrl }) {
      check(text, String);
      if (!text) {
        throw new Meteor.Error("Write something!");
      }
      return PostsCollection.insert({
        name,
        username,
        text,
        imageUrl,
        createdAt: new Date(),
      });
    },
    "posts.remove"({ postId }) {
      return PostsCollection.remove({
        postId
      });
    }
  });