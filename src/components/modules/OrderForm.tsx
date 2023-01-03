import React from "react"
import { BankCard } from "../simple/BankCard"
import { PrimaryButton } from "../simple/PrimaryButton"
import { PrimaryInput } from "../simple/PrimaryInput"

interface OrderFormProps {
	onClose: () => void
}


export const OrderForm: React.FC<OrderFormProps> = ({onClose}) => {

  return <div className="order-form">
		<PrimaryInput title="First and Last name" pattern="\w{3,}\s\w{3,}(\s\w{3,})*"/>
		<PrimaryInput title="Phone number" type="tel" pattern="\+\d{9,}"/>
		<PrimaryInput title="Delivery address" pattern="\w{5,}\s\w{5,}\s\w{5,}(\s\w{5,})*"/>
		<PrimaryInput title="E-mail" type="email"/>
		<BankCard/>
		<PrimaryButton title="Confirm" onClick={() => {window.setTimeout(onClose, 3000)}}/>
		<PrimaryButton title="Close" onClick={onClose}/>
	</div>
}
