import React from "react"
import PrimaryButton from "../simple/PrimaryButton"

interface ProductInfoProps{
	id: string
	title: string
	annotation: string
	category: string
	author: string
	publisher: string
	price: number
}

const ProductInfo: React.FC<ProductInfoProps> = ({title, annotation, category, author, publisher, price}: ProductInfoProps) => {

  return (
    <div className="info">
			<div className="info__title">{title}</div>
			<div className="info__annotation">{annotation}</div>
			<div className="info__category">Category: <span>{category}</span></div>
			<div className="info__author">Author: <span>{author}</span></div>
			<div className="info__publisher">Publisher: <span>{publisher}</span></div>
			<div className="info__price">Price: <span>{price}</span></div>
			<div className="info__row">
				<button className="info__cart btn btn-cart"></button>
				<PrimaryButton title="Buy"/>
			</div>
			
		</div>
  )
}

export default ProductInfo
