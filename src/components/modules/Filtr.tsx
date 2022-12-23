import React from "react"
import { PrimaryButton } from "../simple/PrimaryButton"
import { PrimaryInput } from "../simple/PrimaryInput"
import { FiltrSection } from "./FiltrSection";

interface FiltrProps{
	sections:Array<{sectionsContent: JSX.Element[] | JSX.Element; title: string;}>
}

export const Filtr: React.FC<FiltrProps> = (props) => {



  return (
		<div className="filtr-module">
			
			{props.sections.map(item => <FiltrSection title={item.title}>{item.sectionsContent}</FiltrSection>)}
			<PrimaryInput title="Search"/>
			<div className="col-2">
				<PrimaryButton title="Clear"/>
				<PrimaryButton title="Copy"/>
			</div>
			
		</div>
	)
}
