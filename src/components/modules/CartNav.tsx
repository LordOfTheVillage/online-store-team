import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useProductsContext } from '../context/ProductsContext';
import { Counter } from '../simple/Counter';

interface CartNavProps {
  page: number;
  pagination: number;
  updatePage: (n: number) => void;
  updatePagination: (n: number) => void;
}

export const CartNav: React.FC<CartNavProps> = (props) => {
  const { products } = useProductsContext();
  const [pagination, setPagination] = useState<number>(props.pagination);
  const [page, setPage] = useState<number>(props.page);
  const maxPage = useMemo(() => {
    return Math.ceil(products.length / pagination);
  }, [pagination, products]);

  const handleSetValue = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = +target.value;
    setPagination(value < 1 ? 1 : value > products.length ? products.length : value);
  };

  const handleSetPage = (mode: string) => {
    if (mode === 'up') setPage(page + 1 > maxPage ? page : page + 1);
    else if (mode === 'down') setPage(page - 1 < 1 ? page : page - 1);
  };

  useEffect(() => setPage(page > maxPage ? maxPage : page), [maxPage]);
  useEffect(() => setPagination(pagination > products.length ? products.length : pagination), [products]);
  useEffect(() => props.updatePage(page), [page]);
  useEffect(() => props.updatePagination(pagination), [pagination]);

  return (
    <div className="cart__nav">
      <div>
        <div className="cart__nav-title">Pagination: </div>
        <input
          className="input-primary"
          type="number"
          min={1}
          step={1}
          max={products.length}
          value={pagination}
          onChange={handleSetValue}
        />
      </div>
      <div>
        <div className="cart__nav-title">Page: </div>
        <Counter value={page} updateValue={handleSetPage} minVal={1} maxVal={maxPage} />
      </div>
    </div>
  );
};
