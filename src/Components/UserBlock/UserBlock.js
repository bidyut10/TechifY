import React from "react";
import "../HomePage/HomePage.css";
const UserBlock = ({ name, phone, email }) => {
  return (
    <div>
      <h1 id="profile">{name}</h1>
    </div>
  );
};

export default UserBlock;
