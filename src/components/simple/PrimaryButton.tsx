import React from "react"

interface PrimaryButtonProps{
	title: string
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({title}: PrimaryButtonProps) => {

  return <button className="btn btn-primary">{title}</button>
}

export default PrimaryButton
