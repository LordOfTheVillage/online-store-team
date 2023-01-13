import React, { ChangeEvent, useEffect } from 'react';

interface PrimarySelectProps {
  options: string[];
  selectedItem?: string;
  onSelect: (sort: string) => void;
}

export const PrimarySelect: React.FC<PrimarySelectProps> = ({ onSelect, selectedItem, options }) => {
  const handleSelect = (e: ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    if (target.value === 'default') {
      onSelect('');
    } else {
      onSelect(target.value);
    }
  };

  useEffect(() => {
    const element = document.querySelector('.select-primary') as HTMLElement;
    const select = element.children[0] as HTMLSelectElement;
    select.value = selectedItem ? selectedItem : 'default';
  }, [selectedItem]);

  return (
    <div className="select-primary">
      <select onChange={handleSelect} data-testid="select">
        <option value={'default'}>Sort options</option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
