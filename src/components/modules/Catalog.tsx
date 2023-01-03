import React from 'react';
import { FullProductProps } from 'src/common/types';

import { ProductCard } from './ProductCard';

interface CatalogProps {
  productsCards: Array<FullProductProps>;
}

export const Catalog: React.FC<CatalogProps> = ({ productsCards }) => {
  return (
    <div className="catalog">
      {productsCards.map((item, index) => (
        <ProductCard key={index} product={item} />
      ))}
    </div>
  );
};
