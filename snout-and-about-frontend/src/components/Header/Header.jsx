import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.css";

function Header() {
  const isLoggedIn = false;
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          <Link
            to={isLoggedIn ? "/browse" : "/"}
            className="header__brand-link"
          >
            <img
              src={logo}
              alt="Snout and About logo"
              className="header__logo"
            />
            <h1 className="header__title">Snout and About</h1>
          </Link>
        </div>
        {!isLoggedIn ? (
          <div className="header__actions">
            <button
              className="header__button header__button--login"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
            <button
              className="header__button header__button--signup"
              onClick={() => navigate("/signup")}
            >
              Create Account
            </button>
          </div>
        ) : (
          <nav className="header__nav">
            <Link to="/profile" className="header__nav-link">
              Profile
            </Link>
            <button
              className="header__button header__button--logout"
              onClick={() => console.log("logout")}
            >
              Log Out
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
