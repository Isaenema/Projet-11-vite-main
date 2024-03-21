import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/SignContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { logged, signOut } = useContext(UserContext);
  const userData = useSelector((state) => state.userInfo);
  console.log(userData);

  const handleSignOut = () => {
    signOut();
    window.location = "/";
  };

  return (
    <header>
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src="../src/assets/img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <i className="fa fa-user-circle"></i>
          {logged ? (
            <div className="main-nav-item" onClick={handleSignOut}>
              Sign Out {userData?.userName}
            </div>
          ) : (
            <Link to="/login" className="main-nav-item">
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
