import React from "react"
import { ALL_PRODUCTS, GENRES, SELECT_ITEMS } from "../../common/data"
import { Catalog } from "../modules/Catalog"
import { Filtr } from "../modules/Filtr"
import { Header } from "../modules/Header"
import {Sort} from "../modules/Sort"
import { DualSlider } from "../simple/DualSlider"
import { PrimaryCheckbox } from "../simple/PrimaryCheckbox"

interface CatalogPageProps{
	
}

const CatalogPage: React.FC<CatalogPageProps> = () => {

	const sectionsArr = [{sectionsContent: GENRES.map((item) => <PrimaryCheckbox title={item.title} id={item.id}/>), title: 'title1'}, {title: 'slider', sectionsContent: <DualSlider min={0} max={10}/>},{sectionsContent: GENRES.map((item) => <PrimaryCheckbox title={item.title} id={item.id}/>), title: 'title1'}, {title: 'slider', sectionsContent: <DualSlider min={0} max={10}/>}]

  return (
		<div className="catalog-page wrapper">
			<Header/>
			<div className="container page-content catalog-content">
				<Filtr sections={sectionsArr}/>
				<div className="catalog-content__second-item">
					<Sort options={SELECT_ITEMS}/>
					<Catalog productsCards = {ALL_PRODUCTS}/>
				</div>
			</div>
			
		</div>
	)
}

export default CatalogPage
