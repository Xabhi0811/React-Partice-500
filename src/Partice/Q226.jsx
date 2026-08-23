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
const Q226 = ({ url }) => <p>{useFetch(url) ? "URL loaded" : "Loading"}</p>;
const Example = () => <Q226 url="/people.json" />;
export default Example;
