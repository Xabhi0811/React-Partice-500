import { useState } from "react";

const ThemeToggle = () => {
	const [dark, setDark] = useState(false);

	return (
		<button onClick={() => setDark(!dark)}>
			{dark ? "Dark theme" : "Light theme"}
		</button>
	);
};

export default ThemeToggle;