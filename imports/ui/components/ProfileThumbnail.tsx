import React from 'react';
import { Meteor } from 'meteor/meteor';

export const ProfileThumbnail = () => {
    const username = Meteor.user()?.username;
    console.log(username);
/*     const name = Meteor.user()?.profile?.name;
    const followers = Meteor.user()?.profile?.followers; */
    return (
        <div className="profile-thumbnail">
          <div className="profile-thumbnail-user-info">
            <h1 className="profile-thumbnail-user-info-name">Kaley Kwan</h1>
            <h1 className="profile-thumbnail-user-info-username">
              @{username}
            </h1>
          </div>
          <div className="profile-thumbnail-user-stats">
            <div className="profile-thumbnail-user-stats-box">
              <h1 className="profile-thumbnail-user-stats-count">
                0
              </h1>
              <h1 className="profile-thumbnail-user-stats-label">Followers</h1>
            </div>
            <div className="profile-thumbnail-user-stats-box">
              <h1 className="profile-thumbnail-user-stats-count">
                0
              </h1>
              <h1 className="profile-thumbnail-user-stats-label">Following</h1>
            </div>
          </div>
{/*           <div className="profile-thumbnail-link-box">
            <AccountCircleOutlinedIcon sx={{ color: "#B089E2" }} />
            <h1 className="profile-thumbnail-link-text">
              <Link href="/MyProfile">Profile</Link>
            </h1>
          </div> */}
        </div>
      );
}