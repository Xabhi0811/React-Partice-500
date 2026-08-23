import { useState } from "react";

const NestedArrayUpdate = () => {
  const [user, setUser] = useState({ tasks: [{ id: 1, done: false }] });

  return (
    <button
      onClick={() =>
        setUser((current) => ({
          ...current,
          tasks: current.tasks.map((task) => ({ ...task, done: true })),
        }))
      }
    >
      {user.tasks[0].done ? "Done" : "Open"}
    </button>
  );
};

export default NestedArrayUpdate;
