import React from "react"
import PrimaryCheckbox from "../simple/PrimaryCheckbox"
import { PrimaryCheckboxProps } from "../types"

interface FiltrCheckboxProps{
	title: string
	filtrItemsCheck: Array<PrimaryCheckboxProps>
}

const FiltrCheckbox: React.FC<FiltrCheckboxProps> = ({title, filtrItemsCheck}: FiltrCheckboxProps) => {

  return (
		<div className="filtr-checkbox">
			<div className="filtr-checkbox__title">{title}</div>
			{filtrItemsCheck.map((item: PrimaryCheckboxProps) => <PrimaryCheckbox title={item.title} id={item.id}/>)}
		</div>
	)
}

export default FiltrCheckbox
