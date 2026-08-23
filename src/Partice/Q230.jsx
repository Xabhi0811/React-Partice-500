import { useMemo } from "react";

const Q230 = () => {
  const value = useMemo(() => 2 + 2, []);
  return <p>{value}</p>;
};

export default Q230;
