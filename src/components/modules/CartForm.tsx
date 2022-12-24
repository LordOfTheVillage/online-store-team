import React from "react"
import { PrimaryButton } from "../simple/PrimaryButton"
import { PrimaryInput } from "../simple/PrimaryInput"


interface CartFormProps{
	amount: number
	totalPrice: number
}

export const CartForm: React.FC<CartFormProps> = ({amount, totalPrice}) => {

	return(<div className="cart__form">
		<div>Products: {amount}</div>
		<div>Total Price: ${totalPrice}</div>
		<PrimaryInput title="Enter promo code"/>
		<PrimaryButton title="Buy"/>
	</div>)
}
