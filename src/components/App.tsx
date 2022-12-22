import React from "react"
import "./App.css"
import "../css/style.css"
import Counter from "./simple/Counter"
import DualSlider from "./simple/DualSlider"
import PrimaryButton from "./simple/PrimaryButton"
import PrimaryCheckbox from "./simple/PrimaryCheckbox"
import PrimarySelect from "./simple/PrimarySelect"
import PrimaryInput from "./simple/PrimaryInput"
import FiltrCheckbox from "./modules/FiltrCheckbox"
// import NavFiltr from "./modules/NavFiltr"
// import ProductsCardModule from "./modules/ProductsCardModule"


function App() {
  return (
    <div className="app">
			{/* <PrimaryButton title = {"Button"}/>
			<PrimaryCheckbox id = {'10'} title={"Checkbox"}/>
			<PrimaryInput title={"Input"}/>
			<Counter maxVal={10}/>
			<PrimarySelect options={['1', '2', '3']}/> */}
			{/* <DualSlider/> */}

			{/* <FiltrCheckbox title="Category" filtrItemsCheck={[{id: '1', title: '1'}, {id: '2', title: '2'}, {id: '3', title: '3'}, {id: '4', title: '4'}, {id: '5', title: '5'}, {id: '6', title: '6'}, {id: '7', title: '7'}, {id: '8', title: '8'}, {id: '9', title: '9'}]}/> */}
			{/* <NavFiltr/> */}
			{/* <ProductsCardModule productsCards={[{title: '111', price: 222, img: './src/assets/products/1.jpg'}]}/> */}
		</div>
  )
}

export default App
