import { useState } from "react";

const ObjectTask = () => {
  const [person, setPerson] = useState({ name: "Alex", age: 20 });
  return (
    <>
      <input
        value={person.name}
        onChange={(event) =>
          setPerson({ ...person, name: event.target.value })
        }
      />
      <button
        onClick={() =>
          setPerson((value) => ({ ...value, age: value.age + 1 }))
        }
      >
        Age {person.age}
      </button>
    </>
  );
};

export default ObjectTask;
