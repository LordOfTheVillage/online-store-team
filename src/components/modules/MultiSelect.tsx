import React, { ChangeEvent, useEffect, useState } from 'react';
import { FC } from 'react';
import { PropertyList } from 'src/common/types';
import { PrimaryCheckbox } from '../simple/PrimaryCheckbox';

interface MultiSelectProps {
  list: PropertyList[];
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
    const text: string = target.value;
    const hasElement: boolean = checkedList.includes(text);

    target.checked = !hasElement;
    const checkedElements: string[] = hasElement ? checkedList.filter((item) => item !== text) : [text, ...checkedList];

    setCheckedList(checkedElements);
    updateList(checkedElements);
  };

  return (
    <div>
      {list.map((e, i) => (
        <PrimaryCheckbox
          key={i}
          checked={startSettings === undefined ? false : startSettings.findIndex((s) => s === e.title) !== -1}
          onChange={handleSelectItems}
          realAmount={e.realAmount as number}
          allAmount={e.allAmount as number}
          title={e.title as string}
          id={i}
        />
      ))}
    </div>
  );
};
