import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar: React.FC = () => (
  <nav>
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
