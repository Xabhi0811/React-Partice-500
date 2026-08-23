import { useEffect, useState } from "react";

const DigitalClock = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(timer);
	}, []);

	return <time>{time.toLocaleTimeString()}</time>;
};

export default DigitalClock;