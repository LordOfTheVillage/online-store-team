import React, { useState } from 'react';
import { inputData } from 'src/common/types';
import { FormInput } from './FormInput';

interface bankCardProps {
  onChange: (e: inputData[]) => void;
  cardData: inputData[];
}

export const BankCard: React.FC<bankCardProps> = ({ onChange, cardData }) => {
  const [cardValue, setCardValue] = useState(cardData);
  const [logo, setLogo] = useState('card__logo');

  const changeCardNumber = (e: React.FormEvent<HTMLInputElement>) => {
    const cardNumber = e.toString();
    setCardValue(
      cardValue.map((item) => {
        if (item.id === 'cardNumber') item.value = cardNumber;
        return item;
      })
    );

    if (cardNumber[0] === '4') setLogo(`card__logo card__logo-visa`);
    else if (cardNumber[0] === '5') setLogo(`card__logo card__logo-mastercard`);
    else if (cardNumber[0] === '6') setLogo(`card__logo card__logo-unionpay`);
    else setLogo(`card__logo`);
  };

  const changeCardDate = (e: React.FormEvent<HTMLInputElement>) => {
    let cardDate = e.toString();
    setCardValue(
      cardValue.map((item) => {
        if (item.id === 'date') item.value = cardDate;
        return item;
      })
    );
  };

  const handleCardData = (e: React.FormEvent) => {
    onChange(cardValue);
  };

  return (
    <form className="card" onChange={handleCardData}>
      <div className="card__row">
        <div className={logo}></div>
        {/* <input
          key={cardValue[0].id}
          className="input-primary"
          onChange={(e: React.FormEvent<HTMLInputElement>) => changeCardNumber(e)}
          placeholder={cardValue[0].title}
          pattern={cardValue[0].pattern}
          value={cardValue[0].value}
          id={cardValue[0].id}
          type={cardValue[0].type}
        /> */}
        <FormInput
          id={cardValue[0].id}
          title={cardValue[0].title}
          pattern={cardValue[0].pattern}
          value={cardValue[0].value}
          onChange={(e: React.FormEvent<HTMLInputElement>) => changeCardNumber(e)}
        />
      </div>
      <div className="card__row">
        <FormInput
          key={cardValue[1].id}
          id={cardValue[1].id}
          title={cardValue[1].title}
          pattern={cardValue[1].pattern}
          isDate={true}
          value={cardValue[1].value}
          onChange={(e: React.FormEvent<HTMLInputElement>) => changeCardDate(e)}
        />
        <FormInput
          key={cardValue[2].id}
          id={cardValue[2].id}
          title={cardValue[2].title}
          pattern={cardValue[2].pattern}
          value={cardValue[2].value}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setCardValue(
              cardValue.map((item) => {
                if (item.id === 'code') item.value = e.currentTarget.value;
                return item;
              })
            )
          }
        />
      </div>
    </form>
  );
};
