import React from "react"
import PrimaryInput from "../simple/PrimaryInput"
import PrimaryButton from "../simple/PrimaryButton"
import FiltrCheckbox from "./FiltrCheckbox"
import { GENRES } from "../date"

interface FiltrProps{
	
}

const Filtr: React.FC<FiltrProps> = () => {

  return (
		<div className="filtr-module">
			
			<FiltrCheckbox title="Category" filtrItemsCheck={GENRES}/>
			<FiltrCheckbox title="Category" filtrItemsCheck={[{id: 'i', title: 'i'}, {id: 'h', title: 'h'}, {id: 'g', title: 'g'}, {id: 'f', title: 'f'}, {id: 'e', title: 'e'}, {id: 'd', title: 'd'}, {id: 'c', title: 'c'}, {id: 'b', title: 'b'}, {id: 'a', title: 'a'}]}/>

			<PrimaryInput title="Search"/>
			<div className="col-2">
				<PrimaryButton title="Clear"/>
				<PrimaryButton title="Copy"/>
			</div>
			
		</div>
	)
}

export default Filtr
