import React from "react"
import { Counter } from "../simple/Counter"
import { PrimaryInput } from "../simple/PrimaryInput"
// import { FullProductProps } from "../../common/types"


// interface CatalogProps{
// 	productsCards: FullProductProps[]
// }

export const CartNav: React.FC = () => {

	return(
		<div className="cart__nav">
			<div><div className="cart__nav-title">Pagination: </div><PrimaryInput title="Number of items"/></div>
			<div><div className="cart__nav-title">Page: </div><Counter minVal={0} maxVal={5}/></div>
		</div>
	)
}
