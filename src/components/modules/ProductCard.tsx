import React from "react"
import { ProductCardProps } from "../types"



const ProductCard: React.FC<ProductCardProps> = ({title, img, price}: ProductCardProps) => {

  return (
		<a className="product-card" href="#">
			<img className="product-card__img" src={img}/>
			<div className="product-card__description col-2">
				<div className="product-card__text">
					<div className="product-card__title">{title}</div>
					<div className="product-card__price">${price}</div>
				</div>
				<img className="product-card__cart" src=""/>
			</div>
			<div className="product-card__bg"/>
		</a>
	)
}

export default ProductCard