import React, { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FullProductProps } from 'src/common/types';
import { ALL_PRODUCTS } from '../../common/data';
import { Breadcrumb } from '../modules/Breadcrumb';
import { ProductGallery } from '../modules/ProductGallery';
import ProductInfo from '../modules/ProductInfo';
import { AppRoutes } from '../utils/pathes';
import { getProductById } from '../utils/utils';

export const ProductPage: React.FC = (): any => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useMemo<FullProductProps>(() => getProductById(id, ALL_PRODUCTS), [id]);

  useEffect(() => {
    if (!getProductById(id, ALL_PRODUCTS)) navigate(AppRoutes.undefined);
  }, [id]);

  return product ? (
    <>
      <Breadcrumb product={product} />
      <div className="catalog-page wrapper">
        <div className="container page-content product-content">
          <div className="product-content__way"></div>
          <div className="product-content__product product">
            <ProductGallery images={product?.images} />
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    </>
  ) : null;
};
