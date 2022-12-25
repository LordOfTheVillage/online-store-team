import React, {FC} from 'react'
import { PRODUCTS } from '../../common/data'
import { CartForm } from '../modules/CartForm'
import { CartNav } from '../modules/CartNav'
import { CartRow } from '../modules/CartRow'
import { Header } from '../modules/Header'

export const CartPage: FC = () => {
  return (<div className="catalog-page wrapper">
	<Header/>
	<div className="container page-content cart-content">
		<CartNav/>
		<div className="cart__products">
			{PRODUCTS.map(item => <CartRow productInfo={item}/>)}
		</div>
		<CartForm amount={10} totalPrice={1000}/>
	</div>
	
</div>)
}