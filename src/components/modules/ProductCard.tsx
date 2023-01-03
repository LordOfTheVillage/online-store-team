import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProductCardProps } from 'src/common/types';
import { AppRoutes } from '../utils/pathes';

export const ProductCard: React.FC<ProductCardProps> = ({ id, title, img, price, productCardClass }) => {
  return (
    // <a className="product-card" href="#">
    <NavLink className={productCardClass} to={AppRoutes.goods + '/' + id}>
      <img className="product-card__img" src={img} />
      <div className="product-card__description">
        <div className="product-card__text">
          <div className="product-card__title">{title}</div>
          <div className="product-card__price">${price}</div>
        </div>
        <button className="product-card__cart btn-cart"></button>
      </div>
      <div className="product-card__bg" />
    </NavLink>
    // </a>
  );
};
