import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<output>{count}</output>
			<button onClick={() => setCount(count + 1)}>+</button>
			<button onClick={() => setCount(count - 1)}>-</button>
		</>
	);
};

export default Counter;