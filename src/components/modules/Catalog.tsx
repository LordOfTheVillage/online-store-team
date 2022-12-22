import React from "react"
import { ProductCardProps } from "../types"
import ProductCard from "./ProductCard"

interface CatalogProps{
	productsCards: Array<ProductCardProps>
}

const Catalog: React.FC<CatalogProps> = ({productsCards}: CatalogProps) => {

	return(
		<div className="catalog">
			{productsCards.map((item: ProductCardProps) => <ProductCard title={item.title} price={item.price} img={item.img}/>)}
		</div>
	)
}

export default Catalog
