import { useEffect } from "react";

const Q149 = () => {
  useEffect(() => {
    const timer = setTimeout(() => console.log("lifecycle work"), 0);
    return () => clearTimeout(timer);
  }, []);
  return <p>Class lifecycle equivalent</p>;
};

export default Q149;
