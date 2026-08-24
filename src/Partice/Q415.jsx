import { useState } from "react";
export default function Q415() {
  const [location, setLocation] = useState("Unknown");
  const locate = () => navigator.geolocation?.getCurrentPosition(position => setLocation(`${position.coords.latitude.toFixed(2)}, ${position.coords.longitude.toFixed(2)}`), () => setLocation("Permission denied"));
  return <div><button onClick={locate}>Locate</button><output>{location}</output></div>;
}
