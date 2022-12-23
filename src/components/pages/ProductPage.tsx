import React from "react"
import { PRODUCTS } from "../../common/data"
import { Header } from "../modules/Header"
import { ProductGallery } from "../modules/ProductGallery"
import ProductInfo from "../modules/ProductInfo"

const ProductPage: React.FC = () => {

  return (
		<div className="catalog-page wrapper">
			<Header/>
			<div className="container page-content product-content">
				<div className="product-content__way"></div>
				<div className="product-content__product product">
					<ProductGallery imgs={PRODUCTS.images}/>
					<ProductInfo product={PRODUCTS}/>
				</div>
			</div>
			
		</div>
	)
}

export default ProductPage
