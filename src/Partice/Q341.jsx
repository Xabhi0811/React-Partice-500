import { useState } from "react";

const Q341 = () => {
  const [user, setUser] = useState({ name: "Abhi", age: 18 });
  return (
    <button
      onClick={() =>
        setUser((current) => ({ ...current, age: current.age + 1 }))
      }
    >
      {user.age}
    </button>
  );
};

export default Q341;
