import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="header">
      <a href="#default" className="logo">
        <span className="first-letter">M</span>eal Share
      </a>

      <div className="header-right">
        <ul>
          <Link to="/">
            <li className="active">Home</li>
          </Link>
          <Link to="/Meals">
            <li>Add Meal</li>
          </Link>
          <Link to="/aboutus">
            <li>About Us</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
