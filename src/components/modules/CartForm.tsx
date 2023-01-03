import React, { useMemo, useState } from 'react';
import { PROMOS } from '../../common/data';
import { Promo } from '../../common/types';
import { ApplyInput } from '../simple/ApplyInput';
import { InputList } from '../simple/InputList';
import { PrimaryButton } from '../simple/PrimaryButton';
import { PrimaryInput } from '../simple/PrimaryInput';

interface CartFormProps {
  amount: number;
  totalPrice: number;
  onOpenModal: () => void;
}

export const CartForm: React.FC<CartFormProps> = ({ amount, totalPrice, onOpenModal }) => {
  const [promos, setPromos] = useState<Promo[]>([]);
  const [value, setValue] = useState<string>('');
  const promo = useMemo(() => PROMOS.find((p) => p.name === value.trim()) || undefined, [value]);
  const discount = useMemo(() => promos.reduce((a, b) => (a += b.value) || 0, 0), [promos]);
  const priceWithDiscount = useMemo(
    () => totalPrice - +((totalPrice * discount) / 100).toFixed(2),
    [totalPrice, discount]
  );

  const handleRemovePromo = (name: string) => setPromos(promos.filter((e) => e.name !== name));
  const handleSetValue = (v: string) => setValue(v);

  return (
    <div className="cart__form">
      <div>Products: {amount}</div>
      <div style={{ textDecoration: discount ? 'line-through' : 'none' }}>Total Price: ${totalPrice}</div>
      <div style={{ display: discount ? 'block' : 'none' }}>Price with discount: ${priceWithDiscount}</div>
      <InputList list={promos} string={'OFF'} onClick={handleRemovePromo} />
      <PrimaryInput title="Enter promo code" onChange={handleSetValue} />
      {promo && !promos.find((p) => p.name === promo.name) && (
        <ApplyInput data={`${value} exists`} string={'ADD'} onClick={() => setPromos([...promos, promo])} />
      )}
      <span style={{ fontSize: '1rem', opacity: '0.5', textAlign: 'center' }}>Test promo: RS, VSU</span>
      <PrimaryButton title="Buy" onClick={onOpenModal} />
    </div>
  );
};
