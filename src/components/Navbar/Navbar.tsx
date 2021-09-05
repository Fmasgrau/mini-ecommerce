import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../../assets/img/logomercat.png';
import ModalBody from '../Modalbody/ModalBody';

interface INavbarProps {
  onClick: () => void;
  quantity: number;
  modalbody?: JSX.Element;
  isEnabled?: boolean;
}

const Navbar = ({
  onClick,
  quantity,
  modalbody,
  isEnabled,
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
            <i className="fa fa-shopping-cart" />
            <span>{quantity}</span>
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
