import { useEffect } from "react";

const Q141 = () => {
  useEffect(() => {
    console.log("setup");
    return () => console.log("cleanup");
  }, []);
  return <p>Setup and cleanup are paired</p>;
};

export default Q141;
