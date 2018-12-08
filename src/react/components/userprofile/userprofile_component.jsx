import React from "react";
const UserProfileComponent = ({ first_name, last_name, username, email }) => {
  return (
    <div>
      <p>username : {username}</p>
      <p>first name : {first_name}</p>
      <p>last name : {last_name} </p>
      <p>email name : {email}</p>
    </div>
  );
};

export default UserProfileComponent;
