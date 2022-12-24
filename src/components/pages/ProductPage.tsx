import React, { useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { FullProductProps } from "src/common/types"
import { PRODUCTS } from "../../common/data"
import { ProductGallery } from "../modules/ProductGallery"
import ProductInfo from "../modules/ProductInfo"
import { Pathes } from "../utils/pathes"
import { getProductById } from "../utils/utils"

export const ProductPage: React.FC = ():any => {
	const {id} = useParams();
	const [product] = useState<FullProductProps>(() => getProductById(id, PRODUCTS))

  return  (
		<>
		{PRODUCTS.length < +id ? <Navigate to={Pathes.goods} /> : ''}
			<div className="catalog-page wrapper">
				<div className="container page-content product-content">
					<div className="product-content__way"></div>
					<div className="product-content__product product">
						<ProductGallery images={product.images}/>
						<ProductInfo product={product}/>
					</div>
				</div>
			</div>
		</>
	)
}
