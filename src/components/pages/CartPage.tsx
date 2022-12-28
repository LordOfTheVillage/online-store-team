import React, {FC, useState} from 'react'
import { PRODUCTS } from '../../common/data'
import { CartForm } from '../modules/CartForm'
import { CartNav } from '../modules/CartNav'
import { CartRow } from '../modules/CartRow'
import { Header } from '../modules/Header'
import { ModalWindow } from '../modules/ModalWindow'
import { OrderForm } from '../modules/OrderForm'


export const CartPage: FC = () => {

	const [isOpenModal, setIsOpenModal] = useState(false);

	const openModal = () => setIsOpenModal(true);
	const closeModal = () => setIsOpenModal(false);

  return (<div className="catalog-page wrapper">
	<Header/>
	<div className="container page-content cart-content">
		<CartNav/>
		<div className="cart__products">
			{PRODUCTS.map(item => <CartRow productInfo={item}/>)}
		</div>
		<CartForm amount={10} totalPrice={1000} onOpenModal={openModal}/>
	</div>
	<ModalWindow onClose = {closeModal} isOpenModal = {isOpenModal}><OrderForm onClose = {closeModal}/></ModalWindow>
</div>)
}