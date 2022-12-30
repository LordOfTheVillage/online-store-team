import React from "react"
import { BankCard } from "../simple/BankCard"
import { PrimaryButton } from "../simple/PrimaryButton"
import { PrimaryInput } from "../simple/PrimaryInput"

interface OrderFormProps {
	onClose: () => void
}

export const OrderForm: React.FC<OrderFormProps> = ({onClose}) => {

  return <div className="order-form">
		<PrimaryInput title="First and Last name"/>
		<PrimaryInput title="Phone number"/>
		<PrimaryInput title="Delivery address"/>
		<PrimaryInput title="E-mail"/>
		<BankCard/>
		<PrimaryButton title="Confirm" onClick={onClose}/>
		<PrimaryButton title="Close" onClick={onClose}/>
	</div>
}
