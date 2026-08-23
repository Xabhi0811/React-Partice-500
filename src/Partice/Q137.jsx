import { useEffect } from "react";

const Q137 = () => {
  useEffect(() => {
    const timer = setInterval(() => console.log("source update"), 1000);
    return () => clearInterval(timer);
  }, []);
  return <p>Subscribed</p>;
};

export default Q137;
