import { useEffect, useState } from "react";

const Q151 = () => {
  const [id, setId] = useState(1);
  useEffect(() => console.log("Effect for selected id", id), [id]);
  return <button onClick={() => setId((value) => value + 1)}>ID {id}</button>;
};

export default Q151;
