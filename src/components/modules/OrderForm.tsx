import React, { useState } from "react"
import { inputData } from "src/common/types"
import { BankCard } from "../simple/BankCard"
import { PrimaryButton } from "../simple/PrimaryButton"
import { PrimaryInput } from "../simple/PrimaryInput"
import { ModalWindow } from "./ModalWindow"

interface OrderFormProps {
	onClose: () => void
}

const cardData: Array<inputData> = [
	{
		id: "cardNumber",
		title: "Card number",
		pattern: "\\d{16}",
		value: ""
	},
	{
		id: "date",
		title: "Valid Thru",
		pattern: "((0[1-9])|([12][0-9])|(3[01]))\\/((0[1-9])|(1[1-2]))",
		value: ""
	},
	{
		id: "code",
		title: "Code",
		pattern: "[0-9]{3}",
		value: ""
	},
]

const orderFormData: Array<inputData> = [
	{
		id: "firstLastNane",
		title: "First and Last name",
		pattern: "\\w{3,}\\s\\w{3,}(\\s\\w{3,})*",
		value: ""
	},
	{
		id: "number",
		title: "Phone number",
		pattern: "\\+\\d{9,}",
		type: "tel",
		value: ""
	},
	{
		id: "address",
		title: "Delivery address",
		pattern: "\\w{5,}\\s\\w{5,}\\s\\w{5,}(\\s\\w{5,})*",
		value: ""
	},
	{
		id: "email",
		title: "E-mail",
		type: "email",
		value: ""
	},
]

export const OrderForm: React.FC<OrderFormProps> = ({onClose}) => {

	const [orderFormValue, setOrderFormValue] = useState(orderFormData);
	const [cardValue, setCardValue] = useState(cardData);

	const [isOpenModal, setIsOpenModal] = useState(false);

	const openModal = () => setIsOpenModal(true);
	const closeModal = () => setIsOpenModal(false);

	const checkOrderForm = () => {

		const errors = document.querySelectorAll('.order-form span');
		for(let i = 0; i < errors.length; i++) errors[i].remove();

		const isValidInputs = checkOrderFormInputs();
		const isValidCard = checkOrderFormCard();
		if(isValidInputs && isValidCard) {
			openModal();
			localStorage.setItem('products', '');
			window.setTimeout(() => {window.location.href = "/"}, 3000);
		}
	}

	const checkOrderFormInputs = () => {
		let isValid = true;

		orderFormData.forEach(item => {
			const input = document.getElementById(item.id) as HTMLInputElement;

			if(input.validity.valid && input.value) {
				input.classList.remove("input-invalid");
			}
			else {
				input.classList.add("input-invalid");

				const el = document.createElement('span');
				el.textContent = 'error';
				el.style.marginLeft = '30px'
				el.style.marginTop = '10px'
				input.after(el);

				isValid = false
			}
		})

		return isValid;
	}

	const checkOrderFormCard = () => {
		let isValidCard = true;
		const card = document.querySelector('.card');
		
		cardValue.forEach(item => {
			const input = document.getElementById(item.id) as HTMLInputElement;
			if(input.validity.valid && input.value) {
				input.classList.remove("input-invalid");
			}
			else {
				input.classList.add("input-invalid");

				const el = document.createElement('span');
				el.textContent = `${item.title} error`;
				card.after(el);

				isValidCard = false
			}
		})

		return isValidCard;
	}

	const handleCardData = (data: inputData[]) => {
		setCardValue(data)
	}

  return <div className="order-form">
		{orderFormValue.map((item) => 
		<div className="input-parent" key={item.id} ><PrimaryInput 
									id={item.id} 
									title={item.title} 
									type={item.type} 
									pattern={item.pattern}
									value={item.value} 
									onChange={(e: React.FormEvent<HTMLInputElement>) => setOrderFormValue(orderFormValue.map(item => {if(item.id === e.currentTarget.id) item.value = e.currentTarget.value; return item}))}/></div>)}
		<BankCard onChange={handleCardData} cardData={cardData}/>
		<PrimaryButton title="Confirm" onClick={() => checkOrderForm()}/>
		<PrimaryButton title="Close" onClick={onClose}/>
		<ModalWindow onClose = {closeModal} isOpenModal = {isOpenModal}><p className="order-complete">Order completed</p></ModalWindow>
	</div>
}
