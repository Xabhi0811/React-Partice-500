import { useEffect, useState } from "react";

const Q126 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/people.json")
      .then((response) => response.json())
      .then(setData);
  }, []);
  return (
    <ul>
      {data.map((item, index) => (
        <li key={item.id || index}>{item.name || JSON.stringify(item)}</li>
      ))}
    </ul>
  );
};

export default Q126;
