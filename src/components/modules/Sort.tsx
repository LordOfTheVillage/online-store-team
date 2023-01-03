import React from 'react';
import { PrimarySelect } from '../simple/PrimarySelect';

interface SortProps {
  options: string[];
  startSetting?: string;
  updateSorting: (sort: string) => void;
	getProductCardDisplay?: (display: string) => void;
}

export const Sort: React.FC<SortProps> = (props) => {

  return (
    <div className="sort-list col-3">
      <div className="sort-list__view">
        <button className="sort-list__view-btn btn btn-view" onClick={() => props.getProductCardDisplay('cell-max')}></button>
        <button className="sort-list__view-btn btn btn-view" onClick={() => props.getProductCardDisplay('cell-min')}></button>
      </div>
      <div className="sort-list__found">
        <span className="sort-list__amount">0</span> Products Found
      </div>
      <PrimarySelect onSelect={props.updateSorting} selectedItem={props.startSetting} options={props.options} />
    </div>
  );
};
