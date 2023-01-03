import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { FullProductProps } from 'src/common/types';
import { AppRoutes } from '../utils/pathes';

interface BreadcrumbProps {
  product: FullProductProps;
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ product }) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <NavLink to={AppRoutes.main}>Store</NavLink> / <span>{product.author}</span> / <span>{product.category}</span> /
      <span> {product.title}</span>
    </div>
  );
};
