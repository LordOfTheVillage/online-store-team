import React, { ReactNode } from "react"
// import { PrimaryCheckboxProps } from "src/common/types"
// import { PrimaryCheckbox } from "../simple/PrimaryCheckbox"

interface FiltrSectionProps{
	title: string
	children: ReactNode
}

export const FiltrSection: React.FC<FiltrSectionProps> = ({children, ...props}) => {

  return (
		<div className="filtr-checkbox">
			<div className="filtr-checkbox__title">{props.title}</div>
			{children}
		</div>
	)
}
