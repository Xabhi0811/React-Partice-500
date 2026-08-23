import { useState } from "react";

const WordCounter = () => {
	const [text, setText] = useState("");
	const words = text.trim() ? text.trim().split(/\s+/).length : 0;

	return (
		<>
			<textarea
				value={text}
				onChange={(event) => setText(event.target.value)}
				placeholder="Write a sentence"
			/>
			<span>{words} words</span>
		</>
	);
};

export default WordCounter;