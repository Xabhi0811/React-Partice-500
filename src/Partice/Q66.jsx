import { useState } from "react";

const initialUser = { name: "Abhishek", age: 18 };

const ResetObject = () => {
  const [user, setUser] = useState(initialUser);

  return (
    <section>
      <p>
        {user.name}: {user.age}
      </p>
      <button onClick={() => setUser({ name: "Updated", age: 20 })}>
        Change
      </button>
      <button onClick={() => setUser(initialUser)}>Reset</button>
    </section>
  );
};

export default ResetObject;
