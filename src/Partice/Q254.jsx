import { useCallback, useMemo } from "react";

const Q254 = () => {
  const value = useMemo(() => 2 + 2, []);
  const action = useCallback(() => alert(value), [value]);
  return <button onClick={action}>{value}</button>;
};

export default Q254;
