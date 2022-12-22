import React from "react"
import { IMGS, PRODUCTS } from "../date"
import Catalog from "../modules/Catalog"
import Filtr from "../modules/Filtr"
import ProductGallery from "../modules/ProductGallery"
import Header from "../modules/Header"
import Sort from "../modules/Sort"
import ProductInfo from "../modules/ProductInfo"
import { FullProduct, ObjectFullProduct } from "../types"

const ProductPage: React.FC<FullProduct> = () => {
console.log(PRODUCTS)
  return (
		<div className="catalog-page wrapper">
			<Header/>
			<div className="container page-content product-content">
				<div className="product-content__way"></div>
				<div className="product-content__product product">
					<ProductGallery imgs={PRODUCTS.images}/>
					<ProductInfo id={PRODUCTS.id} title={PRODUCTS.title} annotation={PRODUCTS.annotation} category={PRODUCTS.category} author={PRODUCTS.author} publisher={PRODUCTS.publisher} price={PRODUCTS.price}/>
				</div>
			</div>
			
		</div>
	)
}

export default ProductPage
