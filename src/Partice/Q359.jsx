import { useEffect, useState } from "react";
export default function Q359() {
  const [id, setId] = useState(1);
  const [value, setValue] = useState("Choose a user");
  useEffect(() => {
    let active = true;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json()).then(user => {
      if (active) setValue(user.name);
    });
    return () => {
      active = false;
    };
  }, [id]);
  return <div><button onClick={() => setId(value => value === 3 ? 1 : value + 1)}>User {id}</button><output>{value}</output></div>;
}
