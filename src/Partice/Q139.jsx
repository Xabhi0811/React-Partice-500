import { useEffect } from "react";

const Q139 = () => {
  useEffect(() => {
    console.log("mount");
    return () => console.log("unmount");
  }, []);
  return <p>Mount and unmount logged</p>;
};

export default Q139;
