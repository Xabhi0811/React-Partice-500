import { useState } from "react";

const ResetCounter = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<output>{count}</output>
			<button onClick={() => setCount(count + 1)}>+</button>
			<button onClick={() => setCount(0)}>Reset</button>
		</>
	);
};

export default ResetCounter;