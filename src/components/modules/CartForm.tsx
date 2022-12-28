import React from "react"
import { PrimaryButton } from "../simple/PrimaryButton"
import { PrimaryInput } from "../simple/PrimaryInput"

interface CartFormProps{
	amount: number
	totalPrice: number
	onOpenModal: () => void
}

export const CartForm: React.FC<CartFormProps> = ({amount, totalPrice, onOpenModal}) => {

	return(<div className="cart__form">
		<div>Products: {amount}</div>
		<div>Total Price: ${totalPrice}</div>
		<PrimaryInput title="Enter promo code"/>
		<PrimaryButton title="Buy" onClick = {onOpenModal}/>
		
	</div>)
}
