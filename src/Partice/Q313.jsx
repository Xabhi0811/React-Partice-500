import { memo, useMemo } from "react";

const Child = memo(({ user }) => <p>{user.name}</p>);

const Q313 = () => {
  const user = useMemo(() => ({ name: "Abhi" }), []);
  return <Child user={user} />;
};

export default Q313;
