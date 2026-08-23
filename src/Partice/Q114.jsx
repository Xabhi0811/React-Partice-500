import { useEffect, useState } from "react";

const Q114 = ({ id }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`/people.json?id=${id}`)
      .then((response) => response.json())
      .then(setData);
  }, [id]);
  return <p>{data ? "Loaded" : "Loading"}</p>;
};

const Example = () => <Q114 id={1} />;
export default Example;
