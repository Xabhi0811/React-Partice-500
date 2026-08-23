import { useState } from "react";

const PreserveObjectProperties = () => {
  const [user, setUser] = useState({ name: "Abhishek", age: 18 });

  const updateAge = () => setUser((current) => ({ ...current, age: 19 }));

  return (
    <section>
      <p>
        {user.name} is {user.age}
      </p>
      <button onClick={updateAge}>Update age</button>
    </section>
  );
};

export default PreserveObjectProperties;
