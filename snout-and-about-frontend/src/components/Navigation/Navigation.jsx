// src/components/Navigation/Navigation.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoggedIn }) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {isLoggedIn ? (
          <>
            <li className="navigation__item">
              <Link to="/browse" className="navigation__link">
                Browse
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/profile" className="navigation__link">
                Profile
              </Link>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
}

export default Navigation;
