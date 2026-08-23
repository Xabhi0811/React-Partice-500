import { useReducer } from "react";

const TodoReducer = () => {
  const reducer = (todos, action) => {
    if (action.type === "add") return [...todos, { id: Date.now(), text: action.text, done: false }];
    if (action.type === "toggle") {
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    }
    return todos.filter((todo) => todo.id !== action.id);
  };
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <>
      <button
        onClick={() =>
          dispatch({ type: "add", text: `Task ${todos.length + 1}` })
        }
      >
        Add todo
      </button>
      {todos.map((todo) => (
        <button
          key={todo.id}
          onClick={() => dispatch({ type: "toggle", id: todo.id })}
        >
          {todo.done ? "Done" : todo.text}
        </button>
      ))}
    </>
  );
};

export default TodoReducer;
