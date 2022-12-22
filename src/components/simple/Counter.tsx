import React, { useState } from "react"

interface CounterProps{
	maxVal: number
}

const Counter: React.FC<CounterProps> = ({maxVal}: CounterProps) => {
	const [count, setCount] = useState<number>(0);

  return (
    <div className="counter">
			<button className="counter__btn" onClick={() => setCount(count - 1 < 0 ? 0 : count - 1)}>–</button>
			<div className="counter__val">{count}</div>
			<button className="counter__btn" onClick={() => setCount(count + 1 > maxVal ? maxVal : count + 1)}>＋</button>
		</div>
  )
}

export default Counter
