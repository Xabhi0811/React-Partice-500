import { useState } from "react";

const ImmutableObjectMutation = () => {
  const [user, setUser] = useState({ name: "User", age: 18 });

  const updateName = () =>
    setUser((current) => ({ ...current, name: "Updated" }));

  return <button onClick={updateName}>{user.name}</button>;
};

export default ImmutableObjectMutation;
