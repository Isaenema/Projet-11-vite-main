import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  let myToken = localStorage.getItem("myToken");

  const [logged, setLogged] = useState(myToken ? true : false);

  const togglelog = () => {
    if (myToken) {
      setLogged(logged ? false : true);
    } else {
      setLogged(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem("myToken");
    window.location.reload(true);
  };

  return (
    <UserContext.Provider value={{ logged, togglelog, signOut }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
