import React from "react"
import { GENRES } from "../../../src/common/data"
// import DualSlider from "../simple/DualSlider"
// import { DualSlider } from "../simple/DualSlider"
import { PrimaryButton } from "../simple/PrimaryButton"
import { PrimaryCheckbox } from "../simple/PrimaryCheckbox"
import { PrimaryInput } from "../simple/PrimaryInput"
import { FiltrSection } from "./FiltrSection"

interface FiltrProps{
	
}

export const Filtr: React.FC<FiltrProps> = () => {

  return (
		<div className="filtr-module">
			
			<FiltrSection title="Category" >{GENRES.map((item) => <PrimaryCheckbox title={item.title} id={item.id}/>)}</FiltrSection>
			{/* <FiltrSection title="Category" >{<DualSlider min={0} max={10} onChange={({ min, max }: {min: number, max: number}) => console.log(`min = ${min}, max = ${max}`)}/>}</FiltrSection> */}
			
			<PrimaryInput title="Search"/>
			<div className="col-2">
				<PrimaryButton title="Clear"/>
				<PrimaryButton title="Copy"/>
			</div>
			
		</div>
	)
}
