import { useEffect } from "react";

const Q103 = () => {
  useEffect(() => {
    const handler = () => console.log("resize");
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return <p>Resize listener active</p>;
};

export default Q103;
