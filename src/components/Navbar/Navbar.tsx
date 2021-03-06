import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../../assets/img/logomercat.png';

interface INavbarProps {
  onClick: () => void;
  modalbody?: JSX.Element;
  isEnabled?: boolean;
  icon: JSX.Element;
}

const Navbar = ({
  onClick,
  modalbody,
  isEnabled,
  icon,
}: INavbarProps): JSX.Element => (
  <nav>
    <div>
      <ul>
        <li>
          <NavLink to="/" className="button__icon">
            {/* <i className="fa fa-home" /> */}
            <img src={Logo} alt="logo home" />
          </NavLink>
        </li>
        <li>
          <button className="button__icon" type="button" onClick={onClick}>
            {icon}
          </button>
        </li>
      </ul>
    </div>
    {isEnabled && <div className="cart__menu">{modalbody}</div>}
  </nav>
);

Navbar.defaultProps = {
  modalbody: <></>,
  isEnabled: false,
};

export default Navbar;
