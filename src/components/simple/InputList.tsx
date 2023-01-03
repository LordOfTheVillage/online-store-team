import React, { FC } from 'react';
import { Promo } from 'src/common/types';
import { ApplyInput } from './ApplyInput';

interface InputListProps {
  list: Promo[];
  string: string;
  onClick: (name: string) => void;
}

export const InputList: FC<InputListProps> = ({ list, onClick, string }) => {
  return (
    <>
      {list.map(({ name }, index) => (
        <ApplyInput key={index} string={string} data={name} onClick={() => onClick(name)} />
      ))}
    </>
  );
};
