import { useState } from "react";

const Temperature = () => {
	const [celsius, setCelsius] = useState(0);

	return (
		<>
			<input
				type="number"
				value={celsius}
				onChange={(event) => setCelsius(event.target.value)}
			/>
			<span>{((Number(celsius) * 9) / 5 + 32).toFixed(1)} °F</span>
		</>
	);
};

export default Temperature;