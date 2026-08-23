import { useEffect, useState } from "react";

const Q134 = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value < 1) {
      const timer = setTimeout(() => setValue(1), 0);
      return () => clearTimeout(timer);
    }
  }, [value]);
  return <p>{value}</p>;
};

export default Q134;
