import React, { useEffect, useState } from 'react';
import { PrimaryCheckboxProps } from 'src/common/types';
import { getRandomString } from '../utils/utils';

export const PrimaryCheckbox: React.FC<PrimaryCheckboxProps> = (props) => {
  const [id] = useState<string>(getRandomString());

  useEffect(() => {
    const input = document.getElementById(`${props.id + id}`) as HTMLInputElement;
    input.checked = props.checked;
  }, [id, props.checked]);

  return (
    <div data-testid={'checkbox-primary'} className="checkbox-primary">
      <input
        type="checkbox"
        onChange={props.onChange}
        className="checkbox-primary__input"
        id={`${props.id + id}`}
        value={props.title}
      />
      <label className="checkbox-primary__label" htmlFor={`${props.id + id}`}>
        <span>{props.title}</span>
        <span>
          {' '}
          {props.realAmount} / {props.allAmount}
        </span>
      </label>
    </div>
  );
};
