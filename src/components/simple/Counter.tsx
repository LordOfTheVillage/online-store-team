import React, { useState } from "react"

interface CounterProps{
	maxVal: number
	minVal: number
}

export const Counter: React.FC<CounterProps> = (props) => {
	const [count, setCount] = useState<number>(0);

  return (
    <div className="counter">
			<button className="counter__btn" onClick={() => setCount(count - 1 < props.minVal ? props.minVal : count - 1)}></button>
			<div className="counter__val">{count}</div>
			<button className="counter__btn" onClick={() => setCount(count + 1 > props.maxVal ? props.maxVal : count + 1)}></button>
		</div>
  )
}
