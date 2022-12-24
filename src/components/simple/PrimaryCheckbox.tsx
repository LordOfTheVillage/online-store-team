import React, { useState } from 'react';
import { PrimaryCheckboxProps } from 'src/common/types';
import { getRandomString } from '../utils/utils';

export const PrimaryCheckbox: React.FC<PrimaryCheckboxProps> = (props) => {
  const [id] = useState<string>(getRandomString());
  return (
    <div className="checkbox-primary">
      <input
        type="checkbox"
        onChange={props.onChange}
        className="checkbox-primary__input"
        id={`${props.id + id}`}
        value="yes"
      />
      <label className="checkbox-primary__label" htmlFor={`${props.id + id}`}>
        {props.title}
      </label>
    </div>
  );
};
