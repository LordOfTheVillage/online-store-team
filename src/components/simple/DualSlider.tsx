import React from "react"

interface DualSliderProps{
	minVal: number
	maxVal: number
}

const DualSlider: React.FC<DualSliderProps> = ({minVal, maxVal}: DualSliderProps) => {

  return (
    <input data-role="doubleslider"/>
  )
}

export default DualSlider
