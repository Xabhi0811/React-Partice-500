import { useState } from "react";

const TodoArray = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn state", done: false },
  ]);

  const toggleTodo = () =>
    setTodos((current) =>
      current.map((todo) => ({ ...todo, done: !todo.done })),
    );

  return (
    <section>
      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.text}: {todo.done ? "Done" : "Open"}
        </p>
      ))}
      <button onClick={toggleTodo}>Toggle todo</button>
    </section>
  );
};

export default TodoArray;
