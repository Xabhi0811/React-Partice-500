import { useState } from "react";

const Toggle = () => {
	const [enabled, setEnabled] = useState(false);

	return (
		<button onClick={() => setEnabled(!enabled)}>
			{enabled ? "On" : "Off"}
		</button>
	);
};

export default Toggle;