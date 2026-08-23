import { useState } from "react";

const Q322 = () => {
  const [text, setText] = useState("");

  const load = async () => {
    const module = await import("./Q1");
    setText(module.default().props.children);
  };

  return <button onClick={load}>{text || "Load component"}</button>;
};

export default Q322;
