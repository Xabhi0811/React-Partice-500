import { useEffect, useState } from "react";
export default function Q401() {
  const [online, setOnline] = useState(true);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setSeconds(value => value + 1), 1000);
    return () => clearInterval(timer);
  }, []);
  return <div><button onClick={() => setOnline(value => !value)}>Connection: {String(online)}</button><output>{seconds}s</output></div>;
}
