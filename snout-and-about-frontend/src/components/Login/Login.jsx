import React from "react";
import "./Login.css";

function Login() {
  return (
    <main className="login">
      <h1 className="login__title">Welcome Back!</h1>
      <form className="login__form">
        <label className="login__label">
          Email:
          <input
            type="email"
            className="login__input"
            placeholder="you@dogmail.com"
          />
        </label>
        <label className="login__label">
          Password:
          <input
            type="password"
            className="login__input"
            placeholder="••••••••"
          />
        </label>
        <button className="login__button" type="submit">
          Log In
        </button>
      </form>
    </main>
  );
}

export default Login;
