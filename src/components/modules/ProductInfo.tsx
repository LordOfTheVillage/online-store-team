import React from "react"
import { FullProductProps } from "../../common/types"
import { PrimaryButton } from "../simple/PrimaryButton"

interface ProductInfoProps{
	product: FullProductProps
}

const ProductInfo: React.FC<ProductInfoProps> = ({product}) => {

  return (
    <div className="info">
			<div className="info__title">{product.title}</div>
			<div className="info__annotation">{product.annotation}</div>
			<div className="info__category">Category: <span>{product.category}</span></div>
			<div className="info__author">Author: <span>{product.author}</span></div>
			<div className="info__price">Price: <span>{product.price}</span></div>
			<div className="info__row">
				<PrimaryButton title="Buy"/>
				<button className="info__cart btn btn-cart"></button>
			</div>
			
		</div>
  )
}

export default ProductInfo
