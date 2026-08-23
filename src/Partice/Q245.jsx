import { useCallback } from "react";

const Q245 = () => {
  const handleClick = useCallback(() => alert("Clicked"), []);
  return <button onClick={handleClick}>Click</button>;
};

export default Q245;
