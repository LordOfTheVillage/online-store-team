import React, { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProductsContext } from '../context/ProductsContext';
import { CartForm } from '../modules/CartForm';
import { CartNav } from '../modules/CartNav';
import { CartRow } from '../modules/CartRow';
import { ModalWindow } from '../modules/ModalWindow';
import { OrderForm } from '../modules/OrderForm';
import { getAmount, getTotalPrice } from '../utils/products';
import { saveQueryPrimitive, parseQueryPrimitive } from '../utils/query';

export const CartPage: FC = () => {
  const { products } = useProductsContext();
  const [searchParams, setSearchParams] = useSearchParams({});
  const [isOpenModal, setIsOpenModal] = useState(() => parseQueryPrimitive(searchParams, 'modal') === 'true' || false);
  const [pagination, setPagination] = useState(() => +parseQueryPrimitive(searchParams, 'limit') || products.length);
  const [page, setPage] = useState(() => +parseQueryPrimitive(searchParams, 'page') || 1);

  useEffect(() => {
    setSearchParams({
      ...saveQueryPrimitive(page, 'page'),
      ...saveQueryPrimitive(pagination, 'limit'),
      ...saveQueryPrimitive(isOpenModal, 'modal'),
    });
  }, [page, pagination, isOpenModal]);

  const handleUpdatePage = (value: number) => setPage(value);
  const handleUpdatePagination = (value: number) => setPagination(value);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return products.length ? (
    <div className="catalog-page wrapper">
      <div className="container page-content cart-content">
        <CartNav
          page={page}
          pagination={pagination}
          updatePage={handleUpdatePage}
          updatePagination={handleUpdatePagination}
        />
        <div className="cart__products">
          {products.map((item, index) => {
            if (index + 1 > (page - 1) * pagination && index + 1 <= page * pagination)
              return <CartRow key={item.value.id} number={index + 1} productInfo={item.value} />;
          })}
        </div>
        <CartForm amount={getAmount(products)} totalPrice={getTotalPrice(products)} onOpenModal={openModal} />
      </div>
      <ModalWindow onClose={closeModal} isOpenModal={isOpenModal}>
        <OrderForm onClose={closeModal} />
      </ModalWindow>
    </div>
  ) : (
    <div style={{ marginTop: '100px', fontSize: '2rem', textAlign: 'center' }}>The cart is empty :(</div>
  );
};
