import { useEffect, useState } from "react";

const Q135 = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value === 0) {
      const timer = setTimeout(() => setValue(1), 0);
      return () => clearTimeout(timer);
    }
  }, [value]);
  return <p>Guarded state: {value}</p>;
};

export default Q135;
