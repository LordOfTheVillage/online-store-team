import React from "react"
import { FullProductProps } from "../../common/types"
import { Counter } from "../simple/Counter"

interface CartRowProps{
	productInfo: FullProductProps
}

export const CartRow: React.FC<CartRowProps> = ({productInfo}) => {

	// const [totalPrice, setTotalPrice] = useContext(0);

  return (
		<div className="cart__row">
			<a className="cart__product" href="#">
				<img className="cart__img" src={productInfo.images[0]}/>
				<div className="cart__description">
					<div className="cart__title">{productInfo.title}</div>	
					<div className="cart__category">Category: <span>{productInfo.category}</span></div>
					<div className="cart__author">Author: <span>{productInfo.author}</span></div>
					<div className="cart__price">Price: $<span>{productInfo.price}</span></div>
				</div>
				<div className="cart__annotation">{productInfo.annotation}</div>
			</a>
			<Counter minVal={0} maxVal={productInfo.stock}/>
			<div className="cart__total-price">Total Price: $1000</div>
			<button className="btn-basket"></button>
		</div>
	)
}