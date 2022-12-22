import React from "react"
import { PrimaryCheckboxProps } from "../types"


const PrimaryCheckbox: React.FC<PrimaryCheckboxProps> = ({id, title}: PrimaryCheckboxProps) => {

  return (
    <div className="checkbox-primary">
			<input type="checkbox" className="checkbox-primary__input" id={id} value="yes"/>
			<label className="checkbox-primary__label" htmlFor={id}>{title}</label>
		</div>
  )
}

export default PrimaryCheckbox