import React from "react"
import { PRODUCTS } from "../date"
import Catalog from "../modules/Catalog"
import Filtr from "../modules/Filtr"
import Header from "../modules/Header"
import Sort from "../modules/Sort"

interface CatalogPageProps{
	
}

const CatalogPage: React.FC<CatalogPageProps> = ({}: CatalogPageProps) => {

  return (
		<div className="catalog-page wrapper">
			<Header/>
			<div className="container page-content catalog-content">
				<Filtr/>
				<div className="catalog-content__second-item">
					<Sort/>
					<Catalog productsCards = {[{title: '1', price: 2, img: 'https://s3-goods.ozstatic.by/2000/945/24/101/101024945_0.jpg'}, {title: '1', price: 2, img: 'https://s3-goods.ozstatic.by/2000/945/24/101/101024945_0.jpg'}, {title: '1', price: 2, img: 'https://s3-goods.ozstatic.by/2000/945/24/101/101024945_0.jpg'}, {title: '1', price: 2, img: 'https://s3-goods.ozstatic.by/2000/945/24/101/101024945_0.jpg'}, {title: '1', price: 2, img: 'https://s3-goods.ozstatic.by/2000/945/24/101/101024945_0.jpg'}, {title: '1', price: 2, img: 'https://s3-goods.ozstatic.by/2000/945/24/101/101024945_0.jpg'}, {title: '1', price: 2, img: 'https://s3-goods.ozstatic.by/2000/945/24/101/101024945_0.jpg'}, {title: '1', price: 2, img: 'https://s3-goods.ozstatic.by/2000/945/24/101/101024945_0.jpg'}, {title: '1', price: 2, img: 'https://s3-goods.ozstatic.by/2000/945/24/101/101024945_0.jpg'}]}/>
				</div>
			</div>
			
		</div>
	)
}

export default CatalogPage
