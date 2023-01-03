import React, { FC, useState } from 'react';
import { useProductsContext } from '../context/ProductsContext';
import { CartForm } from '../modules/CartForm';
import { CartNav } from '../modules/CartNav';
import { CartRow } from '../modules/CartRow';
import { ModalWindow } from '../modules/ModalWindow';
import { OrderForm } from '../modules/OrderForm';
import { getAmount, getTotalPrice } from '../utils/products';

export const CartPage: FC = () => {
  const { products } = useProductsContext();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [pagination, setPagination] = useState<number>(products.length);
  const [page, setPage] = useState<number>(1);

  const handleUpdatePage = (value: number) => setPage(value);
  const handleUpdatePagination = (value: number) => setPagination(value);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return products.length ? (
    <div className="catalog-page wrapper">
      <div className="container page-content cart-content">
        <CartNav updatePage={handleUpdatePage} updatePagination={handleUpdatePagination} />
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
