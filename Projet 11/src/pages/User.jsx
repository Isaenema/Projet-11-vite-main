import React from "react";
import Usersaccounts from "../components/Usersaccounts";
import Usersname from "../components/Usersname";
import { useSelector } from "react-redux";

const User = () => {
  const userData = useSelector((state) => state.userInfo);

  return (
    <main className="main bg-dark">
      <Usersname userData={userData} />
      <Usersaccounts userData={userData} />
    </main>
  );
};

export default User;
