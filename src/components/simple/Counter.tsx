import React, { useEffect, useState } from 'react';

interface CounterProps {
  value: number;
  maxVal: number;
  minVal: number;
  updateValue: (mode: string) => void;
}

export const Counter: React.FC<CounterProps> = (props) => {
  const [count, setCount] = useState<number>(props.value);

  useEffect(() => {
    setCount(props.value);
  }, [props.value]);

  return (
    <div className="counter">
      <button
        className="counter__btn" data-testid="counter-btn-down"
        onClick={() => {
          if (!(count - 1 < props.minVal)) setCount(count - 1);
          props.updateValue('down');
        }}
      ></button>
      <div className="counter__val" data-testid="counter-val">{count}</div>
      <button
        className="counter__btn" data-testid="counter-btn-up"
        onClick={() => {
          if (count + 1 <= props.maxVal) props.updateValue('up');
          setCount(count + 1 > props.maxVal ? props.maxVal : count + 1);
        }}
      ></button>
    </div>
  );
};
