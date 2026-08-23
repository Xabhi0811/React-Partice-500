import { useEffect } from "react";

const Q91 = () => {
  useEffect(() => console.log("Empty array: mount and cleanup"));
  return <p>Without an array, it runs after every render</p>;
};

export default Q91;
