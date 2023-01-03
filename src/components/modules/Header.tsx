import React from 'react';
import { NavLink } from 'react-router-dom';
import { useProductsContext } from '../context/ProductsContext';
import { AppRoutes } from '../utils/pathes';
import { getAmount, getTotalPrice } from '../utils/products';

export const Header: React.FC = () => {
  const { products } = useProductsContext();
  return (
    <header className="header">
      <div className="container col-3">
        <NavLink to={AppRoutes.main} className="header__logo">
          Logo
        </NavLink>
        <div className="header__cart-total">
          Total Price: <span className="header__price">${getTotalPrice(products)}</span>
        </div>
        <NavLink to={AppRoutes.cart} className="header__cart btn-cart">
          <div className="header__cart-count">{getAmount(products)}</div>
        </NavLink>
      </div>
    </header>
  );
};
