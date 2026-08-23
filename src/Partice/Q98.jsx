import { useEffect, useState } from "react";

const Q98 = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setSeconds((value) => value + 1),
      1000,
    );
    return () => clearInterval(intervalId);
  }, []);
  return <p>Clean interval: {seconds}</p>;
};

export default Q98;
