import React from "react";
import Mypic from "./img/mypic.jpeg";
const Profile = () => {
  let localUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="ProfilePage">
      <div className="Profile">
        <div>
          <img src={Mypic} alt="profile" />
        </div>
        <div>
          <h2>{`${localUser.fname} ${localUser.lname} `}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
