import React from "react";
import { connect } from "react-redux";
import { logoutSuccess } from "../Redux/AuthSlice";

const Header = ({ isAuthenticated, logoutSuccess }) => {
  const handleSignOut = () => {
    logoutSuccess();

    localStorage.removeItem("token");
  };

  return (
    <header>
      <nav class="main-nav">
        <a class="main-nav-logo" href="/">
          <img
            class="main-nav-logo-image"
            src="../src/assets/img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </a>
        <div>
          <i class="fa fa-user-circle"></i>
          {isAuthenticated ? (
            <button className="main-nav-item" href="/" onClick={handleSignOut}>
              Sign Out
            </button>
          ) : (
            <a className="main-nav-item" href="/login">
              Sign In
            </a>
          )}
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated, // Accédez à l'état d'authentification à partir du slice
});

const mapDispatchToProps = {
  logoutSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
