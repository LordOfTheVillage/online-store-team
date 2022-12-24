import React, { ChangeEvent, useState } from 'react';
import { FC } from 'react';
import { PrimaryCheckbox } from '../simple/PrimaryCheckbox';

interface MultiSelectProps {
  list: string[];
  updateList: (name: string[]) => void;
}

export const MultiSelect: FC<MultiSelectProps> = ({ list, updateList }) => {
  const [checkedList, setCheckedList] = useState([]);

  const handleSelectItems = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const label = target.parentNode.lastChild as HTMLLabelElement;
    const text: string = label.innerText;
    const hasElement: boolean = checkedList.includes(text);

    target.checked = !hasElement;

    const list: string[] = hasElement ? checkedList.filter((item) => item !== text) : [text, ...checkedList];

    setCheckedList(list);
    updateList(list);
  };

  return (
    <div>
      {list.map((e, i) => (
        <PrimaryCheckbox key={i} onChange={handleSelectItems} title={e} id={i} />
      ))}
    </div>
  );
};
