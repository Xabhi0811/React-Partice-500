import { useEffect } from "react";

const Q85 = () => {
  useEffect(() => {
    console.log("Mounted once");
  }, []);
  return <p>Effect runs once</p>;
};

export default Q85;
