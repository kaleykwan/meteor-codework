import { Meteor } from "meteor/meteor";
import React from "react";

interface postInfo {
  id: string;
  name: string;
  username: string;
  text: string;
  imageURL: string;
}

export const Post = ({ id, name, username, text, imageURL }: postInfo) => {
  console.log("post content: " + text);
  console.log("post id: " + id);
  const removePost = (_id: string) => {
    console.log("starting removePost method");
    console.log("post id: " + id);
    Meteor.call("posts.remove", _id);
    console.log("removed!");
  };
  return (
    <div className="post">
      <div className="post-header">
        <div>
          {imageURL ? (
            <img src={imageURL} alt="{name}'s profile picture" />
          ) : (
            <img
              src="/images/blankprofile.png"
              style={{ width: 50, height: 50 }}
            />
          )}
        </div>
        <div className="post-header-text">
          <div className="post-header-text-user-info">
            <p className="post-header-text-name"> {name} </p>
            <p className="post-header-text-username">@{username}</p>
            {/* <CircleIcon
                  className="post-header-text-circle"
                  sx={{ fontSize: "3px" }}
                /> */}
            <p className="post-header-text-date">
              {/*date.toLocaleDateString()*/}
            </p>
          </div>
          <div>
            <p className="post-content"> {text} </p>
          </div>
        </div>
      </div>
      <div className="post-footer">
        <div className="post-footer-loop">
          <button onClick={() => removePost(id)} className="make-post-button">Remove post</button>
          {/* <Link href="https://nextjs.org">Loop</Link> */}
        </div>
        <div className="post-footer-actions">
          {/* <IconButton className="post-footer-actions-comment">
                <InsertCommentRoundedIcon sx={{ color: "#FFFFFF" }} />
              </IconButton>
              <IconButton className="post-footer-actions-like" onClick={handleLike}>
                <FavoriteBorderIcon sx={{ color: "#FFFFFF" }} />
              </IconButton>
              <IconButton className="post-footer-actions-share">
                <IosShareOutlinedIcon sx={{ color: "#FFFFFF" }} />
              </IconButton> */}
        </div>
      </div>
    </div>
  );
};
