import React from 'react';
import { FullProductProps } from 'src/common/types';

import { ProductCard } from './ProductCard';

interface CatalogProps {
  productsCards: Array<FullProductProps>;
	productCardDisplay: string
}

export const Catalog: React.FC<CatalogProps> = ({ productsCards, productCardDisplay }) => {
  return (
    <div className="catalog">
      {productsCards.map((item, index) => (
        <ProductCard key={index} product={item} productCardClass={productCardDisplay} />
      ))}
    </div>
  );
};
