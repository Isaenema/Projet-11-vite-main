import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  let myToken = localStorage.getItem("token");

  const [logged, setLogged] = useState(myToken ? true : false);
  console.log(logged);
  const togglelog = () => {
    if (myToken) {
      setLogged(logged ? false : true);
    } else {
      setLogged(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    window.location.reload(true);
  };

  return (
    <UserContext.Provider value={{ logged, togglelog, signOut }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
