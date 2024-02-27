import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { loginSuccess } from "../Redux/AuthSlice"; // Importez vos actions

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // État pour suivre l'état de connexion

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const LoginForm = ({ loginSuccess }) => {
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post(
          "http://localhost:3001/api/v1/user/login",
          {
            email,
            password,
          }
        );

        if (response.status === 200) {
          // Remplacer par la structure réelle de votre réponse où le token est situé
          const { token } = response.data.body;
          if (token) {
            localStorage.setItem("token", token);
            setLoggedIn(true); // Stocker le token dans le localStorage
          }
        }
      } catch (error) {
        // Une erreur s'est produite lors de la requête
        console.error("Erreur lors de la connexion :", error.message);
        setError("Une erreur est survenue lors de la connexion.");
      }
      loginSuccess(); // Dispatch de l'action de connexion réussie
    };
  };

  if (loggedIn) {
    return <Redirect to="/user" />;
  }

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
