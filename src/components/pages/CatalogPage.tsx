import React from "react"
import { ALL_PRODUCTS, SELECT_ITEMS } from "../../common/data"
import { Catalog } from "../modules/Catalog"
import { Filtr } from "../modules/Filtr"
import { Header } from "../modules/Header"
import {Sort} from "../modules/Sort"

interface CatalogPageProps{
	
}

const CatalogPage: React.FC<CatalogPageProps> = () => {

  return (
		<div className="catalog-page wrapper">
			<Header/>
			<div className="container page-content catalog-content">
				<Filtr/>
				<div className="catalog-content__second-item">
					<Sort options={SELECT_ITEMS}/>
					<Catalog productsCards = {ALL_PRODUCTS}/>
				</div>
			</div>
			
		</div>
	)
}

export default CatalogPage
