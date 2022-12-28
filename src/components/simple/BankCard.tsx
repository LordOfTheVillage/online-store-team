import React from "react"
import { PrimaryInput } from "./PrimaryInput"

export const BankCard: React.FC = () => {

  return <div className="card">
		<div className="card__row">
			<div className="card__logo"></div>
			<PrimaryInput title="Card number"/>
		</div>
		<div className="card__row">
			<PrimaryInput title="Valid Thru"/>
			<PrimaryInput title="Code"/>
		</div>
	</div>
}
