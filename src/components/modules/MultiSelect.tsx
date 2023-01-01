import React, { ChangeEvent, useEffect, useState } from 'react';
import { FC } from 'react';
import { IPropertyList } from 'src/common/types';
import { PrimaryCheckbox } from '../simple/PrimaryCheckbox';

interface MultiSelectProps {
  list: IPropertyList[];
  startSettings: string[] | undefined;
  updateList: (name: string[]) => void;
}

export const MultiSelect: FC<MultiSelectProps> = ({ list, startSettings, updateList }) => {
  const [checkedList, setCheckedList] = useState<string[]>([]);

  useEffect(() => {
    if (startSettings !== undefined) setCheckedList(startSettings);
    else setCheckedList([]);
  }, [startSettings]);

  const handleSelectItems = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const label = target.parentNode.lastChild as HTMLLabelElement;
    const span = label.firstChild as HTMLSpanElement;
    const text: string = span.innerText;
    const hasElement: boolean = checkedList.includes(text);

    target.checked = !hasElement;

    const list: string[] = hasElement ? checkedList.filter((item) => item !== text) : [text, ...checkedList];

    setCheckedList(list);
    updateList(list);
  };

  return (
    <div>
      {list.map((e, i) => (
        <PrimaryCheckbox
          key={i}
          checked={startSettings === undefined ? false : startSettings.findIndex((s) => s === e.title) !== -1}
          onChange={handleSelectItems}
          realAmount={e.realAmount}
          allAmount={e.allAmount}
          title={e.title}
          id={i}
        />
      ))}
    </div>
  );
};
