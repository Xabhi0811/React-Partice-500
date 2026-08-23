import { useEffect, useState } from "react";
const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return width;
};
const Q221 = () => <p>Width: {useWindowSize()}</p>;
export default Q221;
