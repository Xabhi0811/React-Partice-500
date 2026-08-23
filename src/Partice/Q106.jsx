import { useEffect, useState } from "react";

const Q106 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/people.json")
      .then((response) => response.json())
      .then(setData);
  }, []);
  return <p>Fetched: {data.length}</p>;
};

export default Q106;
