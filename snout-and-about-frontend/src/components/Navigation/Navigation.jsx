import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" className="navigation__link">
            Home
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/profile" className="navigation__link">
            Profile
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/login" className="navigation__link">
            Login
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/signup" className="navigation__link">
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
