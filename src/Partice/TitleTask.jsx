import { useEffect, useState } from "react";

const TitleTask = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <button onClick={() => setCount((value) => value + 1)}>
      Title count: {count}
    </button>
  );
};

export default TitleTask;
