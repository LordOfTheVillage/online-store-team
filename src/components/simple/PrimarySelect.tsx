import React, { ChangeEvent } from 'react';

interface PrimarySelectProps {
  options: string[];
  onSelect: (sort: string) => void;
}

export const PrimarySelect: React.FC<PrimarySelectProps> = ({ onSelect, options }) => {
  const handleSelect = (e: ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    if (target.value === 'default') {
      onSelect('');
    } else {
      onSelect(target.value);
    }
  };

  return (
    <div className="select-primary">
      <select onChange={handleSelect}>
        <option value={'default'}>Без сортировки</option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
