import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductCardProps } from 'src/common/types';
import { useProductsContext } from '../context/ProductsContext';
import { AppRoutes } from '../utils/pathes';

export const ProductCard: React.FC<ProductCardProps> = ({ product, productCardClass }) => {
  const { id, images, title, price } = product;
  const { products, addProduct, removeProducts } = useProductsContext();
  const hasProduct = useMemo(() => products.findIndex((p) => p.value.id === id) !== -1, [products]);
  const handleChangeCart = () => {
    if (hasProduct) removeProducts(product);
    else addProduct(product);
  };
  return (
    <div className={`product-card product-card-cell-${productCardClass} product-card`}>
      <NavLink to={AppRoutes.goods + '/' + id}>
        <img className="product-card__img" src={images[0]} />
      </NavLink>
      <div className="product-card__description">
        <NavLink className="product-card__text" to={AppRoutes.goods + '/' + id}>
          <div className="product-card__title">{title}</div>
          <div className="product-card__price">${price}</div>
        </NavLink>
        <button
          onClick={handleChangeCart}
          className={`product-card__cart ${hasProduct ? 'btn-cart-full' : 'btn-cart'}`}
        ></button>
      </div>
      <div className="product-card__bg" />
    </div>
  );
};
