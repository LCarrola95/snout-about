import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignupModal({ isOpen, onClose, onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);

  const navigate = useNavigate();

  const isValidEmail = email.includes("@");
  const isValidPassword = password.length >= 6;

  const emailError =
    touchedEmail && !email
      ? "Email is required"
      : touchedEmail && !isValidEmail
        ? "Enter a valid email"
        : "";

  const passwordError =
    touchedPassword && !password
      ? "Password is required"
      : touchedPassword && !isValidPassword
        ? "Password must be at least 6 characters"
        : "";

  const isFormValid = isValidEmail && isValidPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

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
      onClose={() => {
        onClose();
        setEmail("");
        setPassword("");
        setTouchedEmail(false);
        setTouchedPassword(false);
      }}
      onSubmit={handleSubmit}
      submitText="Create Account"
      isValid={isFormValid}
      errorText={emailError || passwordError}
    >
      <div className="form__field">
        <label htmlFor="signup-email">Email</label>
        <input
          id="signup-email"
          className="form__input"
          type="email"
          placeholder="you@dogmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setTouchedEmail(true);
          }}
          required
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
          onChange={(e) => {
            setPassword(e.target.value);
            setTouchedPassword(true);
          }}
          required
        />
      </div>
    </ModalWithForm>
  );
}

export default SignupModal;
