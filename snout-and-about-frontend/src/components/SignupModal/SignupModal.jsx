import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignupModal({ isOpen, onClose, onSignup }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // later: send data to backend
    if (onSignup) {
      onSignup();
    }

    onClose();
    navigate("/profile");
  };

  return (
    <ModalWithForm
      name="signup"
      title="Join Snout and About"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitText="Create Account"
    >
      <div className="form__field">
        <label htmlFor="signup-name">Name</label>
        <input
          id="signup-name"
          className="form__input"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form__field">
        <label htmlFor="signup-email">Email</label>
        <input
          id="signup-email"
          className="form__input"
          type="email"
          placeholder="you@dogmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form__field">
        <label htmlFor="signup-password">Password</label>
        <input
          id="signup-password"
          className="form__input"
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </ModalWithForm>
  );
}

export default SignupModal;
