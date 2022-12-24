import React from 'react';

interface PrimarySelectProps {
  options: string[];
}

export const PrimarySelect: React.FC<PrimarySelectProps> = (props) => {
  return (
    <div className="select-primary">
      <select>
        <option value={'Dsf'}>Без сортировки</option>
        {props.options.map((item, index) => (
          <option key={index} value={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
