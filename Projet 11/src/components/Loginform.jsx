import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../Redux/AuthSlice";

function LoginForm({ loginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password }
      );
      if (response.status === 200) {
        const { token } = response.data.body;
        if (token) {
          localStorage.setItem("token", token);
          loginSuccess();
          navigate("/user");
        }
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error.message);
      setError("Une erreur est survenue lors de la connexion.");
    }
  };

  return (
    <section class="sign-in-content">
      <i class="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div class="input-wrapper">
          <label for="username">Username</label>
          <input
            type="email"
            id="username"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div class="input-wrapper">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div class="input-remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>

        <button type="submit" className="sign-in-button">
          sign in
        </button>
        {error && <p>{error}</p>}
      </form>
    </section>
  );
}

export default connect(null, { loginSuccess })(LoginForm);
