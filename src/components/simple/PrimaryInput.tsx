import React, { ChangeEvent } from 'react';

interface PrimaryInputProps {
  title: string;
  pattern?: string;
  onChange?: (data: string) => void;
}

export const PrimaryInput: React.FC<PrimaryInputProps> = (props) => {
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    props.onChange(target.value);
  };
  return <input className="input-primary" onChange={handleChange} placeholder={props.title} pattern={props.pattern} />;
};
