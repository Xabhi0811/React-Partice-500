import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData);
  }, [url]);
  return data;
};
const Q222 = () => <p>{useFetch("/people.json") ? "Loaded" : "Loading"}</p>;
export default Q222;
