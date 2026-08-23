import { useState } from "react";

const Tip = () => {
	const [bill, setBill] = useState(50);
	const [rate, setRate] = useState(15);
	const total = Number(bill) + (Number(bill) * Number(rate)) / 100;

	return (
		<>
			<input
				type="number"
				value={bill}
				onChange={(event) => setBill(event.target.value)}
			/>
			<input
				type="number"
				value={rate}
				onChange={(event) => setRate(event.target.value)}
			/>
			<span>Total ${total.toFixed(2)}</span>
		</>
	);
};

export default Tip;