import { useState } from "react";

const Q345 = () => {
  const [firstName] = useState("Abhi");
  const [name, setName] = useState(firstName);
  return <button onClick={() => setName(firstName)}>{name}</button>;
};

export default Q345;
