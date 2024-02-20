import React from "react";

const Header = () => {
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
          <a class="main-nav-item" href="/login">
            <i class="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
