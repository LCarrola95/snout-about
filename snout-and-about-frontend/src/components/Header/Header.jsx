import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.css";

function Header({ isLoggedIn, onLoginClick, onSignupClick, onLogout }) {
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__brand-link">
          <img src={logo} alt="Snout and About logo" className="header__logo" />
          <h1 className="header__title">Snout and About</h1>
        </Link>

        {!isLoggedIn ? (
          <div className="header__actions header__desktop-only">
            <button
              className="header__btn header__btn--secondary"
              onClick={onLoginClick}
            >
              Log In
            </button>
            <button
              className="header__btn header__btn--primary"
              onClick={onSignupClick}
            >
              Create Account
            </button>
          </div>
        ) : (
          <nav className="header__nav header__desktop-only">
            {!isProfilePage && (
              <Link
                to="/profile"
                className="header__btn header__btn--secondary"
              >
                Profile
              </Link>
            )}
            {isProfilePage && (
              <button
                className="header__btn header__btn--secondary"
                onClick={onLogout}
              >
                Log Out
              </button>
            )}
          </nav>
        )}

        <button
          className="header__hamburger"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className="header__mobile-menu">
          {!isLoggedIn ? (
            <>
              <button
                className="header__btn header__btn--secondary"
                onClick={() => {
                  onLoginClick();
                  setIsMenuOpen(false);
                }}
              >
                Log In
              </button>
              <button
                className="header__btn header__btn--primary"
                onClick={() => {
                  onSignupClick();
                  setIsMenuOpen(false);
                }}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="header__btn header__btn--secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
              <button
                className="header__btn header__btn--secondary"
                onClick={() => {
                  onLogout();
                  setIsMenuOpen(false);
                }}
              >
                Log Out
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
