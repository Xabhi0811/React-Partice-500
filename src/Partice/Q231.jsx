import { useMemo } from "react";

const Q231 = () => {
  const value = useMemo(() => 10 * 5, []);
  return <p>Calculation: {value}</p>;
};

export default Q231;
