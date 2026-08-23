import { useMemo } from "react";

const Q236 = () => {
  const value = useMemo(() => "Memo is useful for expensive work", []);
  return <p>{value}</p>;
};

export default Q236;
