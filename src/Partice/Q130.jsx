import { useEffect, useState } from "react";

const Q130 = () => {
  const [person, setPerson] = useState(null);
  useEffect(() => {
    fetch("/people.json")
      .then((response) => response.json())
      .then((data) => setPerson(data.find((item) => item.id === 1)));
  }, []);
  return <p>{person ? person.name : "Finding item"}</p>;
};

export default Q130;
