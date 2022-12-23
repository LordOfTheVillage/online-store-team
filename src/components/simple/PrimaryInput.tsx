import React from "react"

interface PrimaryInputProps{
	title: string
	pattern?: string
}

export const PrimaryInput: React.FC<PrimaryInputProps> = (props) => {

  return <input className="input-primary" placeholder={props.title} pattern={props.pattern}/>
}