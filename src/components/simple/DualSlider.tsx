import React, { useEffect, useState, useRef } from 'react';

interface DualSliderProps {
  min: number;
  max: number;
  startSettings: Record<string, number>;
  updateList: (list: Record<string, number>) => void;
}

export const DualSlider: React.FC<DualSliderProps> = ({ updateList, startSettings, min, max }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const minValRef = useRef(min);
  const maxValRef = useRef(max);

  useEffect(() => {
    setMinVal(min);
    setMaxVal(max);
  }, [min, max]);

  // useEffect(() => {
  //   if (startSettings) {
  //     setMinVal(startSettings.min);
  //     setMaxVal(startSettings.max);
  //   }
  // }, []);

  useEffect(() => {
    if (
      startSettings === undefined ||
      (startSettings.min === minValRef.current && startSettings.max === minValRef.current)
    ) {
      setMinVal(min);
      setMaxVal(max);
    }
  }, [startSettings]);

  useEffect(() => {
    const list: Record<string, number> = { min: minVal, max: maxVal };
    updateList(list);
  }, [minVal, maxVal]);

  return (
    <div className="slider-container">
      <input
        type="range"
        min={startSettings.min}
        max={startSettings.max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="slider-item slider-item--left"
      />
      <input
        type="range"
        min={startSettings.min}
        max={startSettings.max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="slider-item slider-item--right"
      />

      <div className="slider">
        <div className="slider__track" />
        {/* <div ref={range} className="slider__range" /> */}
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};
