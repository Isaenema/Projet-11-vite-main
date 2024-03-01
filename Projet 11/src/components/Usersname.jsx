import React from "react";
import { useSelector } from "react-redux";

const Usersname = () => {
  const user = useSelector((state) => state.user);

  const userName = `${user.firstName} ${user.lastName}`;

  return (
    <div>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userName}!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
    </div>
  );
};

export default Usersname;
