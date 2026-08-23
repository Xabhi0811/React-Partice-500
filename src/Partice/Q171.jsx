import { useEffect, useState } from "react";

const Q171 = () => {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 500);
    return () => clearTimeout(timer);
  }, []);
  return <p>{done ? "Done" : "Waiting"}</p>;
};

export default Q171;
