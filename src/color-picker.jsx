import { useState } from "react";

const ColorPicker = () => {
	const [color, setColor] = useState("#e85d75");

	return (
		<>
			<input
				type="color"
				value={color}
				onChange={(event) => setColor(event.target.value)}
			/>
			<span
				className="color-preview"
				style={{ backgroundColor: color }}
			/>
		</>
	);
};

export default ColorPicker;