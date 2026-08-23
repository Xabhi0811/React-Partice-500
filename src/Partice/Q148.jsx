import { useEffect } from "react";

const Q148 = () => {
  useEffect(
    () => console.log("Separate effects keep unrelated work independent"),
    [],
  );
  return <p>Effects can be separated by responsibility</p>;
};

export default Q148;
