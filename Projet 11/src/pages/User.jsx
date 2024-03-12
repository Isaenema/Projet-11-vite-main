import React from "react";
import Usersaccounts from "../components/Usersaccounts";
import Usersname from "../components/Usersname";
import { useSelector } from "react-redux";
import { accountData } from "../components/Usersaccounts";

const User = () => {
  const userData = useSelector((state) => state.userInfo);

  return (
    <main className="main bg-dark">
      <Usersname userData={userData} />
      {accountData.map(({ title, amount, amountDescription }) => (
        <Usersaccounts
          userData={userData}
          key={title}
          title={title}
          amount={amount}
          amountDescription={amountDescription}
        />
      ))}
    </main>
  );
};

export default User;
