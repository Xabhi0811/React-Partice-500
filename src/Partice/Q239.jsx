import { useMemo } from "react";

const prices = [10, 20, 30];

const Q239 = () => {
  const total = useMemo(
    () => prices.reduce((sum, price) => sum + price, 0),
    [],
  );
  return <p>Total: {total}</p>;
};

export default Q239;
