import React, {  useState } from "react"
import { PrimaryInput } from "./PrimaryInput"

export const BankCard: React.FC = () => {

	const [cardNumber, setCardNumber] = useState('');
	const [cardDate, setCardDate] = useState('');
	const [logo, setLogo] = useState("card__logo");
	// const [validity, setValidity] = useState('');

	const changeCardNumber = (e: React.FormEvent<HTMLInputElement>) => {
		const cardNumber = e.currentTarget.value;
		setCardNumber(cardNumber);

		if(cardNumber[0] === '4') setLogo(`card__logo card__logo-visa`);
		else if(cardNumber[0] === '5') setLogo(`card__logo card__logo-mastercard`);
		else if(cardNumber[0] === '6') setLogo(`card__logo card__logo-unionpay`);
		else setLogo(`card__logo`);
	}

	const changeCardDate = (e: React.FormEvent<HTMLInputElement>) => {
		const cardDate = e.currentTarget.value;
		setCardDate(cardDate);

		if(cardDate.length === 2 && Array.from(cardDate).every(item => typeof +item === 'number' && !isNaN(+item))) setCardDate(`${cardDate}/`);
	}


  return <div className="card">
		<div className="card__row">
			<div className={logo}></div>
			<PrimaryInput title="Card number"
										pattern="\d{16}" 
										value={cardNumber}
										onChange={changeCardNumber}/>
		</div>
		<div className="card__row">
			<PrimaryInput title="Valid Thru" 
										pattern="((0[1-9])|([12][0-9])|(3[01]))\/((0[1-9])|(1[1-2]))"
										value={cardDate}
										onChange={changeCardDate}/>
			<PrimaryInput title="Code"
										pattern="[0-9]{3}"/>
		</div>
	</div>
}
