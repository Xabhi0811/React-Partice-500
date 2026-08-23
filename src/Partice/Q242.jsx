import { useMemo } from "react";

const Q242 = () => {
  const user = useMemo(() => ({ name: "Abhi" }), []);
  return <p>{user.name}</p>;
};

export default Q242;
