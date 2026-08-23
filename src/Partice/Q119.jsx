import { useEffect, useState } from "react";

const Q119 = ({ id }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch("/people.json", { signal: controller.signal })
      .then((response) => response.json())
      .then((value) => setData(value))
      .catch(() => {});
    return () => controller.abort();
  }, [id]);
  return <p>{data ? "Current request" : "Waiting"}</p>;
};

const Example = () => <Q119 id={1} />;
export default Example;
