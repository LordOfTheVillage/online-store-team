import React from "react"
import { SELECT_ITEMS } from "../date"
import PrimarySelect from "../simple/PrimarySelect"

interface SortProps{

}

const Sort: React.FC<SortProps> = ({}: SortProps) => {

	return(
		<div className="sort-list col-3">
			<div className="sort-list__view">
				<button className="sort-list__view-btn btn btn-view">1<img/></button>
				<button className="sort-list__view-btn btn btn-view">2<img/></button>
			</div>
			<div className="sort-list__found"><span className="sort-list__amount">0</span> Products Found</div>
			<PrimarySelect options={SELECT_ITEMS}/>
		</div>
	)
}

export default Sort
