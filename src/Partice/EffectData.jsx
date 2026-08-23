import { useEffect, useState } from "react";

const EffectData = () => {
  const [status, setStatus] = useState("Waiting");
  useEffect(() => {
    const timer = setTimeout(() => setStatus("Loaded"), 500);
    return () => clearTimeout(timer);
  }, []);

  return <output>{status}</output>;
};

export default EffectData;
