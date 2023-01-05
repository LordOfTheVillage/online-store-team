import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FullProductProps } from '../../common/types';
import { useProductsContext } from '../context/ProductsContext';
import { PrimaryButton } from '../simple/PrimaryButton';
import { AppRoutes } from '../utils/pathes';

interface ProductInfoProps {
  product: FullProductProps;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const navigate = useNavigate();
  const { products, addProduct, removeProducts } = useProductsContext();
  const hasProduct = useMemo(() => products.findIndex((p) => p.value.id === product.id) !== -1, [products]);
  const handleChangeCart = () => {
    if (hasProduct) removeProducts(product);
    else addProduct(product);
  };
  const handleOpenCart = () => {
    if (!hasProduct) addProduct(product);
    navigate(AppRoutes.cart);
    const button = document.querySelector('.btn-primary') as HTMLButtonElement;
    console.log(button);
    button.click();
  };
  return (
    <div className="info">
      <div className="info__title">{product.title}</div>
      <div className="info__annotation">{product.annotation}</div>
      <div className="info__category">
        Category: <span>{product.category}</span>
      </div>
      <div className="info__author">
        Author: <span>{product.author}</span>
      </div>
      <div className="info__price">
        Price: <span>${product.price}</span>
      </div>
			<div className="info__stock">
        Stock: <span>{product.stock}</span>
      </div>
      <div className="info__rating">
				Rating: <span>{product.rating}</span>
      </div>
      <div className="info__row">
        <PrimaryButton onClick={handleOpenCart} title="Buy" />
				<button onClick={handleChangeCart} className={`product-card__cart ${hasProduct ? 'btn-cart-full' : 'btn-cart'}`}></button> 
      </div>
    </div>
  );
};

export default ProductInfo;
