import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { TextareaAutosize } from "@mui/material";
/* import { useLoggedUser } from "meteor/quave:logged-user-react";
 */
export const MakePost = () => {
  const [content, setContent] = useState<string>("");
  const kaleyAuthor = {
    name: 'Kaley',
    username: 'kaley',
    imageURL: 'kaley.png',
  }

  const addPost = () => {
    console.log("added post:" + content);
    Meteor.call("posts.insert", {
        name: kaleyAuthor.name,
        username: kaleyAuthor.username,
        text: content,
        imageUrl: kaleyAuthor.imageURL,
    });
    setContent("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost();
  };

  return (
    <div className="make-post">
      <div>
        <form onSubmit={handleSubmit} className="make-post-form">
          {/* <div className="make-post-user-avatar-div">
            <Image
              className="make-post-user-avatar"
              src={ProfilePic}
              alt={"profile picture"}
              width={50}
              height={50}
            />
          </div> */}
          <div>
            <TextareaAutosize
              className="make-post-insert"
              placeholder="Say something!"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="make-post-footer">
            <div className="make-post-button-div">
              <button type="submit" className="make-post-button">
                {" "}
                Post{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
