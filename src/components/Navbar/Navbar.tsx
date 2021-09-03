import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

interface INavbarProps {
  onClick: () => void;
}

const Navbar = ({ onClick }: INavbarProps): JSX.Element => (
  <nav>
    <div>
      <ul>
        <li>
          <NavLink to="/" className="button__icon">
            <i className="fa fa-home" />
          </NavLink>
        </li>
        <li>
          <button className="button__icon" type="button" onClick={onClick}>
            <i className="fa fa-shopping-cart" />
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
