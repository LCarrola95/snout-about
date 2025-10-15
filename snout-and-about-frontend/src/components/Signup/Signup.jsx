import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <main className="signup">
      <h1 className="signup__title">Join Snout & About!</h1>
      <form className="signup__form">
        <label className="signup__label">
          Name:
          <input
            type="text"
            className="signup__input"
            placeholder="Your name"
          />
        </label>
        <label className="signup__label">
          Email:
          <input
            type="email"
            className="signup__input"
            placeholder="you@dogmail.com"
          />
        </label>
        <label className="signup__label">
          Password:
          <input
            type="password"
            className="signup__input"
            placeholder="••••••••"
          />
        </label>
        <button className="signup__button" type="submit">
          Sign Up
        </button>
      </form>
    </main>
  );
}

export default Signup;
