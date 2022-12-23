import React from "react"

interface PrimarySelectProps{
	options: string[]
}

export const PrimarySelect: React.FC<PrimarySelectProps> = (props) => {

  return (
		<div className="select-primary">
			<select>
				<option disabled selected>Сортировка</option>
				{props.options.map((item) => <option>{item}</option>)}
			</select>
		</div>
  )
}
