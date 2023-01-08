import React, { ChangeEvent, useEffect, useState } from 'react';

interface PrimaryInputProps {
  title: string;
  pattern?: string;
  startSearchSettings?: string;
  onChange: (data: string) => void;
  value?: string;
  id?: string;
  type?: string;
}

export const PrimaryInput: React.FC<PrimaryInputProps> = (props) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
    props.onChange(target.value);
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
