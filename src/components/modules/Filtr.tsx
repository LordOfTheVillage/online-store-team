import React from 'react';
import { PrimaryButton } from '../simple/PrimaryButton';
import { PrimaryInput } from '../simple/PrimaryInput';
import { FilterSection } from './FiltrSection';

interface FilterProps {
  sections: Array<{ sectionsContent: JSX.Element[] | JSX.Element; title: string }>;
  updateSearch: (search: string) => void;
}

export const Filter: React.FC<FilterProps> = (props) => {
  return (
    <div className="filtr-module">
      {props.sections.map((item, index) => (
        <FilterSection key={index} title={item.title}>
          {item.sectionsContent}
        </FilterSection>
      ))}
      <PrimaryInput onChange={props.updateSearch} title="Search" />
      <div className="col-2">
        <PrimaryButton title="Clear" />
        <PrimaryButton title="Copy" />
      </div>
    </div>
  );
};
