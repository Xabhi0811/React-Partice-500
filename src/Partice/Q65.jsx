import { useState } from "react";

const UpdateAge = () => {
  const [person, setPerson] = useState({ name: "Abhishek", age: 18 });

  return (
    <button
      onClick={() =>
        setPerson((current) => ({ ...current, age: current.age + 1 }))
      }
    >
      {person.name}: {person.age}
    </button>
  );
};

export default UpdateAge;
