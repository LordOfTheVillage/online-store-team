import React, { FormEvent, useEffect, useState } from 'react';

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
    setValue(target.value);
    props.onChange(e);
		if (props.isNumber) numberCheck(target);
    if (props.isDate) dateCheck(target);
  };

  const dateCheck = (target: HTMLInputElement) => {
    let cardDate = target.value;
		setValue(cardDate);
		if(cardDate.at(-1) !== '/' || cardDate.length !== 3) numberCheck(target)
    if (cardDate.length === 2 && Array.from(cardDate).every((item) => typeof +item === 'number' && !isNaN(+item))){
			cardDate = `${cardDate}/`;
    	setValue(cardDate);
		}
  };

	const numberCheck = (target: HTMLInputElement) => {
    let number;
		const newVal = target.value;
    if(!isNaN(+newVal[newVal.length - 1])) number = target.value;
		else number = target.value.slice(0, -1);
    setValue(number);
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
