import { memo, useCallback } from "react";

const Child = memo(({ onClick }) => <button onClick={onClick}>Click</button>);

const Q314 = () => {
  const handleClick = useCallback(() => alert("Clicked"), []);
  return <Child onClick={handleClick} />;
};

export default Q314;
