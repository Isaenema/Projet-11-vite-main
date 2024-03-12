import React from "react";
import { useState } from "react";
import EditUserName from "./EditUserInfo";

const Usersname = ({ userData }) => {
  const userName = `${userData?.firstName} ${userData?.lastName}`;

  const [toggleEditUserName, setToggleEditUserName] = useState(false);

  const handeEditUserName = () => {
    setToggleEditUserName(!toggleEditUserName);
  };

  return (
    <div>
      {toggleEditUserName ? (
        <EditUserName setToggleEditUserName={setToggleEditUserName} />
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userName}!
          </h1>
          <button className="edit-button" onClick={handeEditUserName}>
            Edit Name
          </button>
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
    </div>
  );
};

export default Usersname;
