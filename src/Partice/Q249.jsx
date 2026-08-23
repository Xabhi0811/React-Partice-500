import { memo, useCallback } from "react";

const Child = memo(({ onClick }) => <button onClick={onClick}>Child</button>);

const Q249 = () => {
  const handleClick = useCallback(() => alert("Child clicked"), []);
  return <Child onClick={handleClick} />;
};

export default Q249;
