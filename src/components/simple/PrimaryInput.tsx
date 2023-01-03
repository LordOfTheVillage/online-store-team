import React from "react"

interface PrimaryInputProps{
	title: string
	pattern?: string
	type?: string
	onChange?: (e: React.FormEvent<HTMLInputElement>) => void
	value?: string
	id?: string
}

export const PrimaryInput: React.FC<PrimaryInputProps> = (props) => {

  return <input className="input-primary" 
								placeholder={props.title} 
								pattern={props.pattern} 
								type={props.type}
								onChange={props.onChange}
								value={props.value}
								id={props.id}/>
}