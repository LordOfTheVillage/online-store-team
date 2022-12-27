import React from "react"
import { PrimaryButton } from "../simple/PrimaryButton"
import { PrimaryInput } from "../simple/PrimaryInput"



interface CartFormProps{
	amount: number
	totalPrice: number
	changeModalClasses: () => void
}

export const CartForm: React.FC<CartFormProps> = ({amount, totalPrice, changeModalClasses}) => {

	// const [modalClasses, setModalClasses] = useState({classModal: "modal", classContent: "modal-content"});

	return(<div className="cart__form">
		<div>Products: {amount}</div>
		<div>Total Price: ${totalPrice}</div>
		<PrimaryInput title="Enter promo code"/>
		<PrimaryButton title="Buy" onClick = {() => changeModalClasses()}/>
		
	</div>)
}
