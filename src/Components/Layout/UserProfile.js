import React from "react";
import Avatar from "react-avatar";
import { HiPhotograph } from "react-icons/hi";

function UserProfile() {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <HiPhotograph size={30} />

      <div className="d-flex align-items-center">
        <div style={{ marginRight: "10px" }}>
          <div className="h5 m-0">JANE DOE</div>
          <small>account setting</small>
        </div>
        <Avatar
          src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
          className="bg-white border"
          size="40"
          round
        />
      </div>
    </div>
  );
}

export default UserProfile;
