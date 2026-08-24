import { useState } from "react";
export default function Q453() {
  const [enabled, setEnabled] = useState(false);
  return <div>
    <button onClick={() => setEnabled(value => !value)}>Enable hook path</button><output>
    {enabled ? "Hook behavior active" : "Hook behavior inactive"}</output>
    </div>;
}
