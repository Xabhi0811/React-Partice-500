import { useState } from "react";

const CharacterCounter = () => {
	const [text, setText] = useState("");

	return (
		<>
			<input
				value={text}
				onChange={(event) => setText(event.target.value)}
				placeholder="Type here"
			/>
			<span>{text.length} characters</span>
		</>
	);
};

export default CharacterCounter;