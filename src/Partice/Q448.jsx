import { useEffect, useState } from "react";
export default function Q448() {
  const [level, setLevel] = useState("Battery API unavailable");
  useEffect(() => {
    let active = true;
    navigator.getBattery?.().then(battery => {
      const update = () => active && setLevel(`${Math.round(battery.level * 100)}%`);
      update();
      battery.addEventListener("levelchange", update);
      return () => battery.removeEventListener("levelchange", update);
    });
    return () => {
      active = false;
    };
  }, []);
  return <output>{level}</output>;
}
