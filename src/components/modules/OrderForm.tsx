import React from "react"
import { BankCard } from "../simple/BankCard"
import { PrimaryButton } from "../simple/PrimaryButton"
import { PrimaryInput } from "../simple/PrimaryInput"

export const OrderForm: React.FC = () => {

  return <div className="order-form">
		<PrimaryInput title="First and Last name"/>
		<PrimaryInput title="Phone number"/>
		<PrimaryInput title="Delivery address"/>
		<PrimaryInput title="E-mail"/>
		<BankCard/>
		<PrimaryButton title="Confirm"/>
		
	</div>
}
