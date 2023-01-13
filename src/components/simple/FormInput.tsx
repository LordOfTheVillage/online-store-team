import React, { FormEvent, useEffect, useState } from 'react';
import { dateCheck, numberCheck } from '../utils/check';

interface FormInputProps {
  title: string;
  pattern?: string;
  startSearchSettings?: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  value?: string;
  id?: string;
  type?: string;
  isDate?: boolean;
	isNumber?: boolean;
}

export const FormInput: React.FC<FormInputProps> = (props) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
		let cardDate = target.value;
    props.onChange(e);
		if (props.isNumber) cardDate = numberCheck(cardDate);
    if (props.isDate) cardDate = dateCheck(cardDate);
		setValue(cardDate);
  };

  useEffect(() => {
    setValue(props.startSearchSettings || '');
  }, [props.startSearchSettings]);

  return (
    <input
      className="input-primary"
      onChange={handleChange}
      placeholder={props.title}
			type={props.type}
      pattern={props.pattern}
      value={value}
      id={props.id}
      
    />
  );
};
