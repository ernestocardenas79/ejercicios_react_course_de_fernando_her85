import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <h1>useContext</h1>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="./"
            >
              Home <span class="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="./about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="./login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
