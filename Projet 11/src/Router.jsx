import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Error from "./pages/Error";
import { connect } from "react-redux";
// import { loginSuccess } from "../src/Redux/AuthSlice";

// function Router({ loginSuccess }) {
//   useEffect(() => {
//     // Vérifiez si un token est présent dans le stockage local
//     const token = localStorage.getItem("token");
//     if (token) {
//       // Si un token est présent, connectez automatiquement l'utilisateur
//       loginSuccess();
//     }
//   }, []);

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

// const mapDispatchToProps = {
//   loginSuccess,
// };

export default connect()(Router);
// null, mapDispatchToProps
