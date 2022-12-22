import React from "react"

interface PrimaryInputProps{
	title?: string
	pattern?: string
}

const PrimaryInput: React.FC<PrimaryInputProps> = ({title, pattern}: PrimaryInputProps) => {

  return <input className="input-primary" placeholder={title} pattern={pattern}/>
}

export default PrimaryInput
