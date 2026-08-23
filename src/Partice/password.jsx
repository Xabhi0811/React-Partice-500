import { useState } from "react";

const Password = () => {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<input
				type={visible ? "text" : "password"}
				defaultValue="secret123"
			/>
			<button onClick={() => setVisible(!visible)}>
				{visible ? "Hide" : "Show"}
			</button>
		</>
	);
};

export default Password;