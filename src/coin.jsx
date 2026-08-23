import { useState } from "react";

const Coin = () => {
	const [result, setResult] = useState("Heads");

	return (
		<>
			<output>{result}</output>
			<button
				onClick={() => setResult(Math.random() > 0.5 ? "Heads" : "Tails")}
			>
				Flip coin
			</button>
		</>
	);
};

export default Coin;