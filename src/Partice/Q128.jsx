import { useEffect, useState } from "react";

const Q128 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/people.json")
      .then((response) => response.json())
      .then((value) =>
        setData(
          [...value].sort((a, b) =>
            String(a.name).localeCompare(String(b.name)),
          ),
        ),
      );
  }, []);
  return <p>{data.map((item) => item.name).join(", ")}</p>;
};

export default Q128;
