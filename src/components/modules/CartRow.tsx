import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { FullProductProps } from '../../common/types';
import { useProductsContext } from '../context/ProductsContext';
import { Counter } from '../simple/Counter';
import { AppRoutes } from '../utils/pathes';

interface CartRowProps {
  productInfo: FullProductProps;
  number: number;
}

export const CartRow: React.FC<CartRowProps> = ({ productInfo, number }) => {
  const { products, addProduct, removeProduct, removeProducts } = useProductsContext();
  const index: number = useMemo(() => products.findIndex((e) => e.value.id === productInfo.id), [products]);
  const count: number = useMemo(() => products[index].count, [products]);
  const totalPrice = useMemo(() => (productInfo.price * count).toFixed(2), [products, count]);

  const handleUpdateCount = (mode: string) => {
    if (mode === 'up') addProduct(productInfo);
    else if (mode === 'down') removeProduct(productInfo);
  };

  return (
    <div className="cart__row">
      <div>{number}</div>
      <NavLink to={AppRoutes.goods + '/' + productInfo.id} className="cart__product">
        <img className="cart__img" src={productInfo.images[0]} />
        <div className="cart__description">
          <div className="cart__title">{productInfo.title}</div>
          <div className="cart__category">
            Category: <span>{productInfo.category}</span>
          </div>
          <div className="cart__author">
            Author: <span>{productInfo.author}</span>
          </div>
          <div className="cart__price">
            Price: $<span>{productInfo.price}</span>
          </div>
        </div>
        <div className="cart__annotation">{productInfo.annotation}</div>
      </NavLink>
      <Counter value={count} updateValue={handleUpdateCount} minVal={1} maxVal={productInfo.stock} />
      <div className="cart__total-price">Total Price: ${totalPrice}</div>
      <button className="btn-basket" onClick={() => removeProducts(productInfo)}></button>
    </div>
  );
};
