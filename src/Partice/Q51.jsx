import { useState } from "react";

const UpdateObjectProperty = () => {
  const [user, setUser] = useState({ name: "Abhishek", age: 18 });

  return (
    <section>
      <p>
        {user.name}, {user.age}
      </p>
      <button
        onClick={() =>
          setUser((current) => ({ ...current, age: current.age + 1 }))
        }
      >
        Increase age
      </button>
    </section>
  );
};

export default UpdateObjectProperty;
