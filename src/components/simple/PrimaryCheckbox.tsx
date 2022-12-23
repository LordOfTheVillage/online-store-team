import React from "react"
import { PrimaryCheckboxProps } from "src/common/types"


export const PrimaryCheckbox: React.FC<PrimaryCheckboxProps> = (props) => {

  return (
    <div className="checkbox-primary">
			<input type="checkbox" className="checkbox-primary__input" id={props.id} value="yes"/>
			<label className="checkbox-primary__label" htmlFor={props.id}>{props.title}</label>
		</div>
  )
}