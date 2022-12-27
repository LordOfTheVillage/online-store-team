import React, {FC, useState} from 'react'
import { PRODUCTS } from '../../common/data'
import { CartForm } from '../modules/CartForm'
import { CartNav } from '../modules/CartNav'
import { CartRow } from '../modules/CartRow'
import { Header } from '../modules/Header'
import { ModalWindow } from '../modules/ModalWindow'
import { OrderForm } from '../modules/OrderForm'


export const CartPage: FC = () => {

	const [modalClasses, setModalClasses] = useState({classModal: "modal", classContent: "modal-content"});

	const changeModalClasses = () => {
		setModalClasses({classModal: "modal modal-active", classContent: "modal-content modal-content-active"})
	}

	console.log(modalClasses)


  return (<div className="catalog-page wrapper">
	<Header/>
	<div className="container page-content cart-content">
		<CartNav/>
		<div className="cart__products">
			{PRODUCTS.map(item => <CartRow productInfo={item}/>)}
		</div>
		<CartForm amount={10} totalPrice={1000} changeModalClasses={changeModalClasses}/>
	</div>
	<ModalWindow classes = {modalClasses}><OrderForm/></ModalWindow>
</div>)
}