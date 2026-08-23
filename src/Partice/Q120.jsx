import { useEffect, useState } from "react";

const Q120 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetch("/people.json", { signal: controller.signal })
      .then((response) => response.json())
      .then(setData)
      .catch(() => {});
    return () => controller.abort();
  }, []);
  return <p>Race-safe: {data.length}</p>;
};

export default Q120;
