import React from "react"

interface PrimaryButtonProps{
	title: string
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {

  return <button className="btn btn-primary">{props.title}</button>
}
