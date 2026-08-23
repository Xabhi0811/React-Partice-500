import { useState } from "react";

const Calculator = () => {
	const [first, setFirst] = useState(0);
	const [second, setSecond] = useState(0);
	const [operator, setOperator] = useState("+");
	const result = operator === "+"
		? Number(first) + Number(second)
		: operator === "-"
			? Number(first) - Number(second)
			: operator === "*"
				? Number(first) * Number(second)
				: Number(second)
					? Number(first) / Number(second)
					: 0;

	return (
		<>
			<input
				type="number"
				value={first}
				onChange={(event) => setFirst(event.target.value)}
			/>
			<select
				value={operator}
				onChange={(event) => setOperator(event.target.value)}
			>
				<option>+</option>
				<option>-</option>
				<option>*</option>
				<option>/</option>
			</select>
			<input
				type="number"
				value={second}
				onChange={(event) => setSecond(event.target.value)}
			/>
			<output>{result}</output>
		</>
	);
};

export default Calculator;