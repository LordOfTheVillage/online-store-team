import React, { ReactNode } from 'react';
// import { PrimaryCheckboxProps } from "src/common/types"
// import { PrimaryCheckbox } from "../simple/PrimaryCheckbox"

interface FilterSectionProps {
  title: string;
  children: ReactNode;
}

export const FilterSection: React.FC<FilterSectionProps> = ({ children, ...props }) => {
  return (
    <div className="filtr-checkbox">
      <div className="filtr-checkbox__title">{props.title}</div>
      {children}
    </div>
  );
};
