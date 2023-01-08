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
}

export const FormInput: React.FC<FormInputProps> = (props) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
    props.onChange(e);
    if (props.isDate) dateCheck(target);
  };

  const dateCheck = (target: HTMLInputElement) => {
    let cardDate = target.value;
    if (cardDate.length === 2 && Array.from(cardDate).every((item) => typeof +item === 'number' && !isNaN(+item)))
      cardDate = `${cardDate}/`;
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
      pattern={props.pattern}
      value={value}
      id={props.id}
      type={props.type}
    />
  );
};
