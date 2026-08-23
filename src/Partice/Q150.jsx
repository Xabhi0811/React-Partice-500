import { useEffect } from "react";

const Q150 = () => {
  useEffect(() => {
    const handler = () => {};
    window.addEventListener("online", handler);
    return () => window.removeEventListener("online", handler);
  }, []);
  return <p>Cleanup included</p>;
};

export default Q150;
