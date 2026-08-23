import { useState } from "react";

const RandomNumber = () => {
	const [maximum, setMaximum] = useState(100);
	const [number, setNumber] = useState(0);

	return (
		<>
			<input
				type="number"
				min="1"
				value={maximum}
				onChange={(event) => setMaximum(event.target.value)}
			/>
			<button
				onClick={() =>
					setNumber(Math.floor(Math.random() * Number(maximum)) + 1)
				}
			>
				Generate
			</button>
			<output>{number}</output>
		</>
	);
};

export default RandomNumber;