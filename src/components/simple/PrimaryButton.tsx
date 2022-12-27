import React from "react"

interface PrimaryButtonProps{
	title: string
	onClick?: () => void
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({title, onClick}) => {

  return <button className="btn btn-primary" onClick = {onClick}>{title}</button>
}
