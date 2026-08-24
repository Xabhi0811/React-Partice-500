import { useState } from "react";
export default function Q424() {
  const [pending, setPending] = useState(false);
  const submit = () => {
    setPending(true);
    setTimeout(() => setPending(false), 700);
  };
  return <button disabled={pending} onClick={submit}>{pending ? "Signing in..." : "Sign in"}</button>;
}
