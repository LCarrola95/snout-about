import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.css";

function Header({ isLoggedIn, onLoginClick, onSignupClick, onLogout }) {
  const location = useLocation(); // safer than window.location

  const isProfilePage = location.pathname === "/profile";

  return (
    <header className="header">
      <div className="header__container">
        {/* LOGO → Home or Browse */}
        <div className="header__brand">
          <Link to="/" className="header__brand-link">
            <img
              src={logo}
              alt="Snout and About logo"
              className="header_logo"
            />
            <h1 className="header__title">Snout and About</h1>
          </Link>
        </div>

        {/* LOGGED OUT VIEW */}
        {!isLoggedIn ? (
          <div className="header__actions">
            <button
              className="header__button header__button--login"
              onClick={onLoginClick}
            >
              Log In
            </button>
            <button
              className="header__button header__button--signup"
              onClick={onSignupClick}
            >
              Create Account
            </button>
          </div>
        ) : (
          /* LOGGED IN VIEW */
          <nav className="header__nav">
            {/* On browse/home → show Profile */}
            {!isProfilePage && (
              <Link to="/profile" className="header__nav-link">
                Profile
              </Link>
            )}

            {/* On profile → show Logout */}
            {isProfilePage && (
              <button
                className="header__button header__button--logout"
                onClick={onLogout}
              >
                Log Out
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
