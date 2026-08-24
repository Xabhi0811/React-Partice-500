import { useState } from "react";
export default function Q410() {
  const [history, setHistory] = useState([0]);
  const [index, setIndex] = useState(0);
  const change = value => {
    const next = history.slice(0, index + 1).concat(value);
    setHistory(next);
    setIndex(next.length - 1);
  };
  return <div><button onClick={() => change(history[index] + 1)}>Value {history[index]}</button><button disabled={!index} onClick={() => setIndex(value => value - 1)}>Undo</button><button disabled={index === history.length - 1} onClick={() => setIndex(value => value + 1)}>Redo</button></div>;
}
