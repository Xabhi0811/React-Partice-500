import { useEffect, useState } from "react";

const Q127 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/people.json")
      .then((response) => response.json())
      .then(setData);
  }, []);
  return (
    <ul>
      {data.map((item, index) => (
        <li key={item.id || index}>{item.name || index}</li>
      ))}
    </ul>
  );
};

export default Q127;
