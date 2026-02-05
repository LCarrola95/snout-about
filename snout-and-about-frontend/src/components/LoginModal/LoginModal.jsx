import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });

  const navigate = useNavigate();

  const isValidEmail = email.includes("@");
  const isValidPassword = password.length >= 6;

  const emailError =
    touched.email && !email
      ? "Email is required"
      : touched.email && !isValidEmail
        ? "Enter a valid email"
        : "";

  const passwordError =
    touched.password && !password
      ? "Password is required"
      : touched.password && !isValidPassword
        ? "Password must be at least 6 characters"
        : "";

  const isFormValid = isValidEmail && isValidPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    onLogin?.();
    handleClose();
    navigate("/profile");
  };

  const handleClose = () => {
    onClose();
    setEmail("");
    setPassword("");
    setTouched({ email: false, password: false });
  };

  return (
    <ModalWithForm
      name="login"
      title="Welcome Back!"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      submitText="Log In"
      isValid={isFormValid}
    >
      <div className="form__field">
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          className="form__input"
          type="email"
          placeholder="you@dogmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setTouched((t) => ({ ...t, email: true }));
          }}
          required
        />
        {emailError && <span className="form__error">{emailError}</span>}
      </div>

      <div className="form__field">
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          className="form__input"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setTouched((t) => ({ ...t, password: true }));
          }}
          required
        />
        {passwordError && <span className="form__error">{passwordError}</span>}
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
