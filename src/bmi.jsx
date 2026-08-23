import { useState } from "react";

const Bmi = () => {
	const [weight, setWeight] = useState(70);
	const [height, setHeight] = useState(1.75);
	const bmi = Number(height) ? Number(weight) / Number(height) ** 2 : 0;

	return (
		<>
			<input
				type="number"
				value={weight}
				onChange={(event) => setWeight(event.target.value)}
				placeholder="kg"
			/>
			<input
				type="number"
				value={height}
				onChange={(event) => setHeight(event.target.value)}
				step="0.01"
				placeholder="m"
			/>
			<span>BMI {bmi.toFixed(1)}</span>
		</>
	);
};

export default Bmi;