import React from "react";
import { connect } from "react-redux";
import { loginSuccess, logoutSuccess } from "../Redux/AuthSlice"; // Importez vos actions

const Header = ({ isAuthenticated, loginSuccess, logoutSuccess }) => {
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
          {isAuthenticated ? (
            <button class="main-nav-item" href="/" onClick={logoutSuccess}>
              Sign Out
            </button>
          ) : (
            <button class="main-nav-item" href="/login" onClick={loginSuccess}>
              Sign In
            </button>
          )}
          {/* <a class="main-nav-item" href="/login">
            <i class="fa fa-user-circle"></i>
            Sign In
          </a> */}
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

const mapDispatchToProps = {
  loginSuccess,
  logoutSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
