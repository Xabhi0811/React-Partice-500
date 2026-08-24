import { useEffect, useState } from "react";
export default function Q361() {
  const [result, setResult] = useState("Loading two endpoints...");
  useEffect(() => {
    Promise.all([fetch("https://jsonplaceholder.typicode.com/todos/1"), fetch("https://jsonplaceholder.typicode.com/users/1")]).then(responses => Promise.all(responses.map(response => response.json()))).then(([todo, user]) => setResult(`${user.name}: ${todo.title}`)).catch(() => setResult("Request failed"));
  }, []);
  return <output>{result}</output>;
}
