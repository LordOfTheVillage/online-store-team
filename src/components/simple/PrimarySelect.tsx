import React from "react"

interface PrimarySelectProps{
	options: string[]
}

const PrimarySelect: React.FC<PrimarySelectProps> = ({options}: PrimarySelectProps) => {

  return (
		<div className="select-primary">
			<select>
				<option disabled selected>Сортировка</option>
				{options.map((item: string) => <option>{item}</option>)}
			</select>
		</div>
  )
}

export default PrimarySelect
