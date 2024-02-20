import React from "react";
import Usersaccounts from "../components/Usersaccounts";
import Usersname from "../components/Usersname";

const User = () => {
  return (
    <main className="main bg-dark">
      <Usersname />
      <Usersaccounts />
    </main>
  );
};

export default User;
