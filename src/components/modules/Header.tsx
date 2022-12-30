import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../utils/pathes';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container col-3">
        <NavLink to={AppRoutes.main} className="header__logo">
          Logo
        </NavLink>
        <div className="header__cart-total">
          Total Price: <span className="header__price">$0</span>
        </div>
        <NavLink to={AppRoutes.cart} className="header__cart btn-cart">
          <div className="header__cart-count">0</div>
        </NavLink>
      </div>
    </header>
  );
};
