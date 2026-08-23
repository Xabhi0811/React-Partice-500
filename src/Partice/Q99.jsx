import { useEffect, useState } from "react";

const Q99 = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => clearInterval(timer);
  }, []);
  return <p>One timer: {seconds}</p>;
};

export default Q99;
