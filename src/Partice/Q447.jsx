import { useEffect, useState } from "react";
export default function Q447() {
  const [user, setUser] = useState("Loading");
  useEffect(() => {
    let active = true;
    fetch("https://jsonplaceholder.typicode.com/users/1").then(response => response.json()).then(data => active && setUser(data.name));
    return () => {
      active = false;
    };
  }, []);
  return <output>{user}</output>;
}
