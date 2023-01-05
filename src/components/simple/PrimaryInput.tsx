import React, { ChangeEvent, useEffect, useState } from 'react';

interface PrimaryInputProps {
  title: string;
  pattern?: string;
  startSearchSettings?: string;
  onChange?: (data: string | React.FormEvent<HTMLInputElement>) => void;
	value?: string;
	id?: string;
	type?: string;
	isDate?: boolean
}

export const PrimaryInput: React.FC<PrimaryInputProps> = (props) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
    props.onChange(target.value);

		if(props.isDate) dateCheck(target);
  };

	const dateCheck = (target: HTMLInputElement) => {
		let cardDate = target.value;
		if(cardDate.length === 2 && Array.from(cardDate).every(item => 
			typeof +item === 'number' && !isNaN(+item)))
		cardDate = `${cardDate}/`

		setValue(cardDate)
	}

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
