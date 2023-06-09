import React from "react";

export const Post = ({ name, username, text, imageURL }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div>
          {imageURL ? (
            <img src={imageURL} alt="{name}'s profile picture" />
          ) : (
            <img src="/images/blankprofile.png" />
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
