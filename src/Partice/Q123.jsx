import { useEffect, useState } from "react";

const Q123 = () => {
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("/people.json")
      .then((response) => {
        if (!response.ok) throw Error("Request failed");
        return response.json();
      })
      .catch((reason) => setError(reason.message));
  }, []);
  return <p>{error || "Request succeeded"}</p>;
};

export default Q123;
