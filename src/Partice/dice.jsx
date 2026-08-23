import { useState } from "react";

const Dice = () => {
	const [roll, setRoll] = useState(1);

	return (
		<>
			<output>{roll}</output>
			<button onClick={() => setRoll(Math.floor(Math.random() * 6) + 1)}>
				Roll dice
			</button>
		</>
	);
};

export default Dice;