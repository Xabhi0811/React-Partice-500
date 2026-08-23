import { useEffect, useState } from "react";

const Q122 = () => {
  const [results, setResults] = useState([[], []]);
  useEffect(() => {
    Promise.all([
      fetch("/people.json").then((response) => response.json()),
      fetch("/people.json").then((response) => response.json()),
    ]).then(setResults);
  }, []);
  return <p>{results[0].length + results[1].length} records</p>;
};

export default Q122;
