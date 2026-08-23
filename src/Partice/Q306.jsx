import { memo, useState } from "react";

const Child = memo(({ value }) => <p>{value}</p>);

const Q306 = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <button onClick={() => setCount((current) => current + 1)}>
        {count}
      </button>
      <Child value="Child does not re-render for the same prop" />
    </section>
  );
};

export default Q306;
