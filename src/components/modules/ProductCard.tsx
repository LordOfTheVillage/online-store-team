import React from "react"
import { ProductCardProps } from "src/common/types"

export const ProductCard: React.FC<ProductCardProps> = ({title, img, price}) => {

  return (
		<a className="product-card" href="#">
			<img className="product-card__img" src={img}/>
			<div className="product-card__description">
				<div className="product-card__text">
					<div className="product-card__title">{title}</div>
					<div className="product-card__price">${price}</div>
				</div>
				<button className="product-card__cart btn-cart"></button>
			</div>
			<div className="product-card__bg"/>
		</a>
	)
}